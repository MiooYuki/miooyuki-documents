---
title: 阅读 Minecraft 源代码
date: 2023/09/29
---

阅读 Minecraft 源代码时编写模组时的重要技巧，这是因为：

- Minecraft 的很多东西都没有文档
- 文档和教程很容易过时

阅读 Minecraft 源代码，你首先需要生成源代码。请参考 [建立模组开发环境](/docs/fabric/install/setup.md) 中的“生成 Minecraft
源代码”段落。

## 搜索 Minecraft 类

搜索一个 Minecraft 类，有以下步骤：

### Intellij IDEA

1. 按 `Ctrl + N` 或 mac 上的 `Cmd + O` 打开搜索面板
2. 将搜索范围设为 `项目和库` 或者更大范围
3. 在搜索框中输入类名称

### Visual Studio Code

1. 按 `Ctrl + P` 打开搜索面板
2. 输入前缀 `#` 再输入类名称

在 Visual Studio Code，你也可以使用 `Ctrl + T` 来直接打开类搜索。

## 查找你想要看到的类

定位到你需要岔开的代码部分并不容易。这里是一些小技巧：

- 充分利用 IDE 的查找相关代码的能力，如调用递归、方法递归、类型递归等。
- 看看与你需要制作的模组类似地开源模组是怎么做的。
- 如果你需要添加新内容，可以访问在 `net.minecraft.util.registry.Registries` 中定义的注册表。
- 记住一切都是从主类（客户端 `net.minecraft.client.main.Main`，专用服务器 `net.minecraft.server.Main`）开始的。
- 在 Minecraft 代码中查找翻译键。`assets/assets/minecraft/lang/en_us.json` 包含了原版使用的所有翻译键。

## 阅读字节码

有时必须要阅读字节码，这是因为

- Mixin 是对字节码进行操作的，而非对源代码。编写复杂的 mixin 时，必须要理解字节码。
- 反编译器（FernFlower）并不完美，有时会产生一些无效的 Java 代码，比如 `int i = true;`。

如果你不熟悉 Java 字节码，请参考 [JVM 规范](https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-6.html)。

查看字节码有以下步骤：

### Intellij IDEA

1. 打开你需要查看字节码的类
2. 从主菜单中选择 `视图（View）`
3. 选择 `显示字节码（Show Bytecode）`

### 外部工具
如果你的 IDE
不支持字节码查看，可以使用外部工具，如 [https://github.com/Konloch/bytecode-viewer](https://github.com/Konloch/bytecode-viewer)。

## 常见问题

**生成的源代码在哪里？**

在用户 gradle 缓存中（`~/.gradle/caches/fabric-loom`）。你可以在 IDE 之外使用源代码 jar。