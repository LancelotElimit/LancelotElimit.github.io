---
title: LancelotEngine 开发日志｜从渲染底层到可视化编辑器
date: 2026-08-19
summary: 持续记录我使用 C++、OpenGL 与 Dear ImGui 开发轻量级 2D 引擎和编辑器原型的架构、功能、问题与下一阶段计划。
---

> 这是一篇持续更新的开发日志，用于记录 LancelotEngine 从渲染底层、资源系统到可视化编辑器的演进过程。

## 项目简介

**LancelotEngine** 是一个使用 **C++、OpenGL 和 Dear ImGui** 开发的轻量级 2D 引擎与可视化编辑器原型。

项目目前面向课程设计、技术学习和原型验证。它还不是成熟的商用游戏引擎，但已经开始形成由引擎底层、编辑器界面、项目管理、资源系统、场景序列化和脚本运行时组成的基本结构。

- **项目状态：** Active Development
- **项目仓库：** [LancelotElimit/2D-Engine](https://github.com/LancelotElimit/2D-Engine)
- **主要平台：** Windows 10 / 11
- **语言标准：** C++20

## 为什么开发自己的 2D 引擎

直接使用 Unity 或 Unreal Engine 可以更快完成一款游戏，但自己实现引擎能够让我理解游戏画面和编辑器背后真正发生了什么。

我希望通过这个项目逐步回答这些问题：

- 一个渲染命令如何最终变成屏幕上的 Quad？
- Vertex Buffer、Index Buffer、Vertex Array、Shader 和 Material 如何协作？
- 如何把 Scene 渲染到 Framebuffer，再嵌入编辑器面板？
- 编辑器中的对象、资产和场景应当如何组织？
- 如何保存项目状态，并在下一次启动时恢复？
- 如何让用户编写的 C++ 脚本在运行时编译并绑定到场景对象？

相比单纯完成一个游戏 Demo，这个项目更关注底层结构、工具链和可扩展性。

## 技术栈

| 分类 | 技术 |
| --- | --- |
| 核心语言 | C++20 |
| 图形 API | OpenGL |
| 窗口与上下文 | GLFW、GLAD |
| 编辑器 UI | Dear ImGui |
| 图像加载 | SDL3、SDL3_image |
| 序列化 | nlohmann/json |
| 构建工具 | CMake、Ninja |
| 开发环境 | Visual Studio 2022 |

这里需要特别说明：当前主线的渲染方案并不是 SDL Renderer。

- `GLFW + GLAD + OpenGL` 负责窗口上下文与图形渲染；
- `Dear ImGui` 负责编辑器 UI；
- `SDL3 + SDL3_image` 当前主要负责图像解码和部分平台辅助能力；
- `nlohmann/json` 负责项目与场景数据的序列化。

## 整体架构

项目采用“后端引擎 + 前端编辑器”的结构：

```text
main.cpp
   │
   ▼
 Engine
   ├── Window / Input
   ├── Renderer / Renderer2D
   ├── Resource / Asset Registry
   ├── Project / Scene
   ├── Script Runtime
   └── Dear ImGui Editor
```

- `backend/` 提供窗口、输入、渲染、资源、项目、场景和脚本等运行时能力；
- `frontend/` 提供基于 Dear ImGui 的编辑器界面；
- `main.cpp` 创建并启动 `Engine`；
- `Engine` 负责连接窗口、渲染器、项目状态、资源系统与编辑器命令流。

我希望让底层模块尽量保持独立，让编辑器通过相对清晰的接口调用引擎能力，而不是把界面逻辑直接写进渲染或资源模块。

## 当前已经实现的能力

### 渲染系统

- `RendererAPI / RenderCommand / Renderer` 图形 API 抽象；
- OpenGL 后端实现；
- `VertexBuffer / IndexBuffer / VertexArray`；
- Shader、Material 与 Texture2D；
- 正交相机与基础 2D Quad 提交链路；
- Scene 视口 Framebuffer 渲染；
- 将 Scene 纹理显示在 ImGui 编辑器面板中。

Scene 视口目前支持：

- `W A S D` 平移；
- `Q E` 旋转；
- 鼠标滚轮缩放。

### 编辑器

编辑器已经包含以下主要面板：

- **Hierarchy Panel：** 对象树和当前选择；
- **Scene Panel：** Scene 视口、拖拽放置和对象编辑；
- **Inspector Panel：** Transform、纹理与脚本属性；
- **Asset Panel：** 项目文件浏览、导入、创建、删除、重命名和移动；
- **Console Panel：** 日志显示与筛选。

编辑器也已经具备 Play、Pause 和 Stop 模式切换，以及对象创建、删除、选择、拖拽移动和属性修改等基础交互。

### 项目与资源系统

当前工作流大致为：

1. 创建或打开项目；
2. 在 Project 面板导入文件或目录；
3. 将资产写入项目目录并登记到 `asset_registry.json`；
4. 在 Hierarchy 或 Scene 中创建对象；
5. 在 Inspector 中编辑对象属性、纹理和脚本；
6. 将纹理等资源拖入 Scene；
7. 保存场景到项目目录；
8. 进入 Play 模式进行最小运行验证。

`ResourceManager` 负责纹理路径解析、SDL 图像解码、OpenGL 纹理创建、缓存和释放；`AssetRegistry` 则负责资产登记、导入、同步与路径索引。

### 场景序列化

`SceneSerializer` 使用 JSON 保存和加载场景。目前场景中的对象、Transform、纹理和脚本绑定已经具备基础的持久化能力。

序列化系统仍需继续演进，尤其是在组件结构、版本兼容和错误处理方面。

### 原生脚本运行时

项目已经开始尝试在 Windows 下运行时编译和动态加载原生 C++ 脚本。

当前能力仍处于雏形阶段，依赖本机的 MSVC `cl.exe`。下一步需要继续完善：

- 编译错误反馈；
- 脚本生命周期；
- 对象与脚本实例的绑定；
- 热重载与资源清理；
- 更稳定的跨项目构建流程。

## 当前项目结构

```text
2D-Engine/
├── app/                    # 编辑器控制器与上层应用逻辑
├── asset/                  # 示例资源
├── backend/
│   ├── core/               # Engine / GameLoop / SceneState
│   ├── input/              # 输入处理
│   ├── platform/
│   │   ├── imgui/          # ImGui 平台与渲染接入
│   │   └── opengl/         # OpenGL 实现
│   ├── project/            # 项目与文件操作
│   ├── render/             # 渲染抽象层与 Renderer2D
│   ├── resource/           # ResourceManager / AssetRegistry
│   ├── script/             # 原生脚本运行时
│   └── window/             # GLFW 窗口管理
├── docs/                   # 阶段文档与里程碑
├── external/               # 第三方依赖
├── frontend/               # Dear ImGui 编辑器
├── CMakeLists.txt
├── CMakePresets.json
└── main.cpp
```

## 构建与运行

目前推荐直接使用 Visual Studio 2022 打开仓库根目录，让 Visual Studio 完成 CMake 配置。

命令行 Debug 构建：

```powershell
cmake --preset x64-debug
cmake --build out/build/x64-debug
```

Release 构建：

```powershell
cmake --preset x64-release
cmake --build out/build/x64-release
```

当前项目对工作目录和资源路径仍有一定要求。如果启动目录不正确，程序可能无法找到纹理或 Shader。

这暴露出当前资源管线中的一个重要问题：构建系统还没有自动将运行资源复制到输出目录。后续需要建立更稳定的资源路径规则，减少程序对启动位置的依赖。

## 当前限制

目前 LancelotEngine 仍然是原型，主要限制包括：

- `GameLoop` 尚未形成完整的玩法层；
- 缺少成熟的组件系统；
- 尚未实现碰撞、动画和音频系统；
- 2D 渲染暂时没有完整的批处理、图集和排序优化；
- 原生脚本运行时以 Windows 为主，并依赖 MSVC；
- 部分资源和 Shader 路径仍需整理；
- `assets/shaders/Renderer2D_Quad.glsl` 的路径需要补齐或修正；
- 编辑器与运行时之间的状态边界仍需进一步明确。

记录这些限制并不是为了否定当前成果，而是为了给后续开发建立清晰的优先级。

## Roadmap

下一阶段计划按照以下顺序推进：

1. 补齐并稳定 Shader 与运行必需资源；
2. 整理渲染主链路，稳定 Scene 视口与资源系统；
3. 设计更清晰的对象与组件抽象；
4. 完善项目创建、资源导入和场景保存闭环；
5. 增强脚本系统、编译反馈与运行时生命周期；
6. 加入碰撞、平台跳跃逻辑和可运行 Demo；
7. 增加渲染批处理、性能统计与更完整的编辑器交互。

## 开发中的思考

开发引擎与开发普通应用最大的不同，是许多模块会相互影响。

资源路径会影响渲染初始化，编辑器操作会改变场景状态，场景序列化又必须理解对象结构，而脚本运行时最终还要与游戏循环和对象生命周期连接。

因此，这个项目目前最重要的目标不是快速增加功能数量，而是逐步稳定模块边界，让每一项新能力能够建立在已有结构上。

## 更新日志

### 2026-08-19｜建立持续开发记录

- 整理当前引擎架构与技术栈；
- 记录渲染、编辑器、项目、资源、场景和脚本模块现状；
- 明确资源路径、组件系统和运行时闭环等主要限制；
- 制定下一阶段 Roadmap。

---

后续每完成一个阶段，我会继续在这里记录：

- 新增了什么能力；
- 为什么采用当前设计；
- 开发过程中遇到了什么问题；
- 最终如何解决；
- 这次修改对整体架构产生了什么影响。
