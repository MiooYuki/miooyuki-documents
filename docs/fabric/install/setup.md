---
title: 建立开发环境
date: 2023/09/29
---

## 前置

- Java 17（推荐）的 JDK（即用于开发 Java
  的工具，安装器可参考 [https://adoptium.net/releases.html](https://adoptium.net/releases.html)。
    - 专业用户可以从 [http://jdk.java.net/](http://jdk.java.net/) 获取JDK，注意需要手动解压并设置系统变量。
- 任意 IDE（集成开发环境）：如 [IntelliJ IDEA](https://www.jetbrains.com/idea/download/#section=windows)
  和 [Eclipse](https://www.eclipse.org/downloads/)
  ，也可使用任何可编辑代码的文本编辑器，如 [Visual Studio Code](https://code.visualstudio.com/)。
    - 如果对这些不熟悉，推荐使用 Intellij IDEA，绝大多数开发者都用这个编写模组。

## 配置步骤

主要有两种新建 Fabric 模组开发环境的方法：你可以手动下载 fabric-example-mod（示例模组模板）并自行配置，也可以使用一些工具来自动设置。

部分地区的用户可能会发现，由于网速原因，构建 Gradle
速度可能比较慢。对于中国内地用户，可参考 [加快 Fabric 模组构建速度的教程](https://fabricmc.cn/2021/06/28/%E5%A6%82%E4%BD%95%E5%8A%A0%E9%80%9FFabric%E6%A8%A1%E7%BB%84%E7%9A%84%E6%9E%84%E5%BB%BA/)
和 [加速
Fabric 模组依赖拉取以及环境搭建教程](https://www.mcbbs.net/forum.php?mod=viewthread&tid=1239261)。

### 手动步骤

1. 复制 [fabric-example-mod](https://github.com/FabricMC/fabric-example-mod/) 中的初始文件（Kotlin 用户或需要其他功能的也可使用
   [the template generator|模板生成器](https://fabricmc.net/develop/template/)，此外，若因网速原因而构建时间较长的，也可以使用
   使用 [其他下载源构建的
   fabric-example-mod](https://github.com/FabricMCCN/fabric-example-mod-cn)），并删除 `LICENSE`（许可证）及 `README.md`
   （简介）文件，因为它们只应用于模板自身，而非你的模组。
2. 编辑 `gradle.properties`:
    - 确保将 `archives_base_name` 和 `maven_group` 设为你喜欢的值。
    - 确保更新 Minecraft、映射、加载器和 loom
      的版本——可以在 [https://fabricmc.net/develop/](https://fabricmc.net/develop/) 查询。
    - 添加你需要在 `build.gradle` 中使用的其他依赖。
3. 将 `build.gradle` 导入到你的 IDE 中（各 IDE 操作各有不同，具体见下）
4. 配置完成！祝武运昌隆（bushi

你也可以生成MC的源文件来作为参考（不过 IDEA 已经自带反编译功能，所以生成不生成都随意）： 运行 Gradle 任务 `genSources`
（生成源文件），如果你的 IDE 不集成 Gradle 支持的话则需要在控制台/终端/命令提示符中输入 `gradlew genSources`（在 Linux 或
macOS 上则是 `./gradlew genSources`）

如有需要，可以在 `gradle.properties` 中设置镜像源。镜像源可能有时不可用，或者内容更新滞后，因此如需暂时禁用镜像源下载，可暂时将相关内容注释掉即可。

```properties
loom_libraries_base=https://bmclapi2.bangbang93.com/maven/
loom_resources_base=https://bmclapi2.bangbang93.com/assets/
loom_version_manifests=https://bmclapi2.bangbang93.com/mc/game/version_manifest.json
loom_experimental_versions=https://maven.fabricmc.net/net/minecraft/experimental_versions.json
loom_fabric_repository=https://repository.hanbings.io/proxy/
```

**Fabric 模组ID变化**

从 1.19.2 开始，Fabric API 的模组ID由 `fabric` 变为 `fabric-api`。如果需要将 1.19.2
的项目向后移植到旧的版本，需要在 `fabric.mod.json` 的 `depends` 部分进行相应变更。

**IntelliJ IDEA**

如果你使用的是 JetBrains 的 IntelliJ IDEA，请遵循以下步骤（注：中文文本可能会因为 IDEA 或中文插件的版本不同而不同）：

1. 在 IDEA 的主菜单里选择“打开或导入…（Import Project）”（如果已经打开了一个项目，选择位于顶端的“文件→打开…”）。
2. 选择项目的 `build.gradle` 文件以导入项目。
3. 在 Gradle 配置完成后，关闭并重新加载项目，否则有些运行配置可能无法正常显示。
4. （如果运行配置还没有出现，试试在 Gradle 页面里重新导入项目。）

可选，但推荐做的一件事： IDEA 默认使用 Gradle 来构建你的项目，而这在 Fabric 是不必要的，而且会导致构建时间变长以及热交换（hotswapping）相关的种种问题。以下是让
IDEA 使用默认编译器的步骤：

1. 在 Gradle 页面里打开“Gradle 设置（Gradle Settings）”
2. 将“使用此工具构建和运行（Build and run using）”和“使用此工具运行测试（Run tests using）”选项改成“IntelliJ IDEA”。
3. 进入 文件（File）→ 项目结构…（Project Structure…）→ 项目（Project）然后将模块编译输出路径（Project compiler
   output）改成 `$PROJECT_DIR$/out`。

不幸的是，目前还不能给“使用此工具构建和运行”和“使用此工具运行测试”设置一个全 IDE 内的默认值，所以这些每创建一个新项目都得重复上述步骤。

**注**：**千万** 不要运行 `idea` 的 gradle 任务，已知它会破坏开发环境。

如果你使用 IntelliJ IDEA，你可以使用 [MinecraftDev](https://plugins.jetbrains.com/plugin/8327) 插件。该插件支持自动生成
Fabric 项目以及一些与 Mixin 有关的功能，如检查、生成访问器（accessor）和影子（shadow）字段、复制 Mixin 目标参考（JVM
描述符）。你可以在文件（File） → 设置（Settings） → 插件（Plugins）中打开内部插件浏览器，找到并安装这个插件，只需要在搜索框里搜索“Minecraft”，选择第一个结果安装即可。

**Eclipse**

如果你使用的是 Eclipse，并且想要生成 IDE 的运行设置，请运行 `gradlew eclipse`。然后，项目就可以作为普通的（非 gradle）的
Eclipse 项目导入你的工作区内，方法就是“文件” — “导入…”菜单，然后“通用” → “已存在的项目导入工作区”。

**Visual Studio Code**

如果你使用的是 Visual Studio Code，请参照这篇教程。

## 生成 Minecraft 源代码

阅读 Minecraft 源代码是编写模组时的重要一部分。但是，我们不能发布 Minecraft 的源代码，因为这违反了 Minecraft
的最终用户许可协议（EULA）。你需要自己生成 Minecraft 源代码。

要生成 Minecrat 源代码，运行 gradle 任务 `genSources`。如果你的 IDE 没有嵌入 gradle，在终端内运行以下命令：`./gradlew
genSources`。反编译可能需要一段时间，取决于计算机的能力。你可能需要在运行任务之后刷新 gradle。

如何阅读源代码，可参考[此教程](/docs/fabric/base/reading_mc_code.md)。

## 新手入门

入门可以先尝试添加一些物品和方块。另外，建议了解一下如何在不重启 Minecraft 的情况下应用更改，以便调试。

## 建议

- 虽然 Fabric API 并不是必需的，但其最首要的目标是提供游戏引擎所不提供的跨模组兼容性和接口，所以我们**强烈**推荐多使用
  Fabric
  API。本 wiki 上的许多教程也会默认使用 Fabric API。
- 随着 fabric-loom（我们的Gradle构建插件）的开发和改动，有些时候你可能会遇上一些通过重置 Gradle 缓存才能解决的问题。使用
  `gradlew cleanloom` 便能清理缓存，而 `gradlew --stop` 则能帮助你解决一些其他疑难杂症。
- 保持跟进到最新的 Loom 版本（Loom 版本是在 `build.gradle` 中定义的），以及 Fabric Loader 和 Fabric API 的版本（这是在
  `build.gradle` 或者 `gradle.properties`
  中定义的）。最新的版本可以在 [https://fabricmc.net/develop/](https://fabricmc.net/develop/) 中找到。即使是旧的
  Minecraft 版本，最新的 Loom 和 Fabric Loader 也会支持。
- 保持跟进到最新的 Gradle 版本，这是在 `gradle/wrapper/gradle-wrapper.properties` 中定义的。最新的 Gradle 也可以用于开发旧的
  Minecraft 版本。
- 不同的 Gradle 版本依赖不同的 Java 版本。通常而言最新的 Gradle 建议使用 Java 17。
- 如果你在为旧版本开发 Minecraft，除了修改 `gradle.properties` 外，你还需要修改 `build.gradle` 和 mixin 配置中更改 Java
  兼容性版本。
- 问问题不要犹豫，有问题就问，总有人会帮你解决的。（笑

## 故障诊断

### 缺少声音

有时当 IDE 在导入 Gradle 项目的时候有些游戏素材不会正常下载。如果遇到这种情况则要手动运行 `downloadAssets` 任务——既可以使用
IDE 的自带菜单也可以直接执行 `gradlew downloadAssets`。

### 错误: 找不到或无法加载主类 net.fabricmc.devlaunchinjector.Main / 启动配置中“没有指定 SDK”

这可能是 Intellij IDEA 自近期更新 2023.2 后的一个 bug。要修复这个问题，删除整个 `.idea` 文件夹然后重启 Intellij IDEA
即可。模块会重新构建。你可能需要再次指定 Java 版本。如果重启之后没有运行配置，你可以运行 `gradle ideaSyncTask` 然后再检查一下。

### java.lang.ClassNotFoundException: net.fabricmc.loader.impl.launch.knot.KnotClient / java.lang.TypeNotPresentException: Type net/minecraft/util/Identifier not present / java.lang.RuntimeException: Minecraft game provider couldn't locate the game! The game may be absent from the class path, lacks some expected files, suffers from jar corruption or is of an unsupported variety/version.

这可能是因为项目路径有中文字符或其他可能造成编码不兼容的字符造成的。可以尝试将项目移到不含中文的路径中，或者在启动参数中（编辑配置），将“Minecraft
Client”和“Minecraft Server”启动配置的“缩短命令行”（Shorten command line）设为“无”。

## 接下来？

创建你的第一个物品。