---
title: 使用映射
date: 2023/10/15
---

## 定义

映射（mapping）定义了类、字段和方法的名称。在常规的 loom 环境中，使用[Yarn](https://github.com/FabricMC/yarn)映射，这是社区决定的，它为
Minecraft 的代码库提供了有意义的名称。[Intermediary](https://github.com/FabricMC/intermediary) 也是 Fabric
使用的一个必要的映射类型。对映射的需要来自 Minecraft 发布的混淆（obfuscation），这代表了多个挑战。重映射（remapping）是对编译的类或者源代码文件应用映射的过程。

## 使用映射

在 Loom 中，映射定义了你在开发环境中使用的 Minecraft 类、字段和方法的名称。这些名称可能因开发环境而异，取决于你安装的映射。

Yarn 是 Loom 使用的默认映射。随着对贡献的接受，Yarn逐渐改进并接受新的发布。Loom 中的映射是使用 buildcraft 中的 `mappings` 
依赖配置指定的，可以通过更新依赖来更新。Minecraft 以及包含在模组增强依赖配置中的依赖项（如 `modCompile`）都是通过映射来重映射的。不在
Yarn 中映射的类、字段和方法，会以中间名显示，如 `class_1234`、`method_1234`、`field_1234`。

```
dependencies {
    [...]
    mappings "net.fabricmc:yarn:${project.yarn_mappings}"
}
```

通过改变您的开发环境中的映射，Minecraft 中类、方法和字段的名称和包括的模组都可能会改变，您的代码可能需要更新才能引用更改的名称。[这一过程可以部分自动化](https://fabricmc.net/wiki/tutorial:migratemappings)
。你可能也需要运行 `genSources` 来运行带有更新的映射的Minecraft源代码。

Loom 的 `remapJar` 任务会提供原始的模组成品，这个成品是使用中间名的jar文件。此外，如果有 `sourcesJar` 任务，`remapSourcesJar` 
会产生使用中间名的源代码 jar。这些 jar 文件都可以作为模组安装，或者连同 `modCompile` 依赖配置一起被包括在开发环境中。

- **'-dev' jar（`jar` 任务的输出）不使用中间名，因此无用。**
  它不可以被安装为开发环境之外的模组，且只能在带有符合的映射的开发环境中起作用。常规的 jar 文件（`remapJar`
  任务输出）才应被使用并使用像 `modCompile` 这样的模组增强依赖项安装在开发环境中。
- **Yarn 名称仅应用于开发环境**。在开发环境之外，只存在中间名，也就是说代码不会准确地匹配你看见和写的东西。Loom
  transparently 可以为您处理这个转换，但是使用反射（reflection）时要谨慎。

#### Mojang 的映射

对于 Loom 0.5，你也可以使用 Mojang 的官方映射而不是 Yarn，像这样：

```text
dependencies {
    [...]
    mappings minecraft.officialMojangMappings()
}
```

Mojang 的映射带有可用的但比 Yarn 更严格的许可证。您需要自行承担使用的风险。

#### 自定义映射

您也可以在您的 Gradle 项目设置为 Fabric Loom 使用自定义的微型（tiny）映射。

比如，如果您有需要用于映射的自定义 Yarn 分支，你可以使用 “./gradlew
build” 命令建立 yarn，拿出 “build/libs” 目录中的 jar 文件，然后移动到您的 Gradle 项目中的 “mapping” 文件夹下。然后，将您的映射依赖项更改为：

```text
dependencies {
    mappings fileTree(dir: "mapping", include: "**.jar")
}
```

您可以更改放置映射的目录，使其具有任何自定义名称，只需更改上面的 “dir” 参数中的名称。注意，如果在映射目录中有映射 jar 文件以外的任何其他文件，Gradle 构建将失败！

## 重新映射

重新映射是将映射应用于代码，从一组名称转换为另一组名称的过程。 Java 源代码和已编译 Java 代码都可以重新映射。
它涉及根据映射更改引用的名称，以及仔细重命名方法以保留替代。 尽管它将影响反射中使用的名称，但它不会更改代码的功能。

[微小的重新映射](https://github.com/FabricMC/tiny-remapper) 是可以重新映射已编译 Java 代码的工具。 它具有命令行界面和可编程界面。
Loom 使用 Tiny Remapper 完成许多任务，Fabric Loader 使用 Tiny Remapper 将 Minecraft 代码重新映射到中介。 Loom 还能够重新映射 Java 源代码。

## 混淆和反混淆

Minecraft Java Edition 的发行版是混淆的 jar 文件，这意味着它们是已编译的二进制文件，其中剥离了任何有意义的命名信息，仅保留了裸露的逻辑。
模糊处理的目的是防止反向工程并减小文件大小。 像 Minecraft 这样的 Java 程序很容易反编译，但是混淆处理剥夺了很多对修改目的有用的信息。
也许有人会怀疑一开始如何为 Minecraft 进行开发。

像 Yarn 这样的映射为开发提供了有意义的名称。 使用映射可以理解 Minecraft 代码并为其创建 mod。 映射可以提供类，字段，方法，参数和局部变量的名称。
显然，这些映射并不完美。 绘制《我的世界》的整个映射表需要来自多个贡献者的大量猜测。 映射可能不完整，有时会随着找到更准确的名称而更改。

## 中间名

Minecraft 的混淆特性是，它在 Minecraft 版本之间并不总是一致的。在 Minecraft 的一个版本中，一个类可能被称为 `abc`
，而在另一个版本中则被称为 `abd`。同样的不一致也适用于字段和方法。不一致会导致 Minecraft 版本之间的二进制不兼容。

Java 代码可以针对一个库版本进行编译，但仍可与另一个版本一起使用，从而使库的两个版本可以二进制兼容。简而言之，如果库公开了至少相同的类，相同的方法和具有相同名称的字段，则将实现二进制兼容性。当使用 Minecraft 作为 mods 的库时，由于缺乏二进制兼容性，Minecraft 的混淆问题（为 mod 在不同游戏版本间的兼容性）带来了挑战。

中介为 Minecraft 版本之间的 Minecraft 内部定义稳定名称。中介名称的目的是始终引用相同的类，字段或方法。与纱线名称不同，中间名称没有意义，而是遵循数字模式，例如 `class_1234`，`method_1234` 
和 `field_1234`。

作为稳定的映射，中间名可以使 Minecraft 二进制兼容多个版本（例如快照版本）！但需要注意的是，它仅对于版本之间未更改的游戏部分才保证兼容性。当安装在开发环境之外时，Fabric
Loader 通过在游戏开始之前重新映射 Minecraft（和 Realms 客户端）来为环境提供中间名称。通过查看安装了 Fabric
Loader 的生产环境中的崩溃报告可以观察到此情况，该报告将包含中间名称。用 Loom 所应用的中间名称编译的 Mod 与此环境自然兼容。