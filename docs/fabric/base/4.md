---
title: 基本的约定和术语
date: 2023/09/29
---

在开始用 Fabric 写 mod 之前，了解以后的教程页面中使用的一些关键术语和短语是一件重要的事。了解诸如包结构和 modid
命名之类的基本约定也是好事。尽早了解这些内容将有助于你更好地理解教程，并使你在需要时能提出更好的问题。

## Mod ID

在整个文档中，我们经常会提到 Mod ID 或代码中的 modid。 Mod ID 代表 Mod 标识符（Mod Identifier），它是一个字符串，应该唯一地标识你的
mod。 Mod ID 通常与同名的标识符命名空间相关联，因此遵循与之相同的限制。Mod ID 只能由小写字母 `a-z`，数字 `0-9` 和符号 `_-`
组成。例如，Minecraft 使用 `minecraft` 命名空间。此外，Mod ID 必须至少包含两个字符。

Mod ID 通常是 mod 名称的紧凑版本，使其简短但可识别并防止命名冲突。按照惯例，名为 “My Project–”
的项目可以称为 `myproject`、`my_project`，或者在某些情况下也可以使用 `my-project`
，但是modid中的连字符可能会有些不好处理[需要引用]。此 mod 将使用此 mod ID 作为注册表命名空间来注册物品和方块。

一些入门教程将使用占位符 mod ID 并在占位符命名空间下注册物品和方块，你可以将其视为入门模板。Fabric Wiki
统一使用 `tutorial` 作为命名空间。尽管保持使用占位符对测试影响不大，但请记住发布项目之前要更改它。

## 标签（Tags）

标签是由一系列拥有相似属性的方块、物品或流体组成的，例如标签 `minecraft:saplings` 包含游戏中所有的树苗（sapling）。关于如何命名你的
mod 中的标签的信息可以在这里找到。

前往 [中文 Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/%E6%A0%87%E7%AD%BE) 了解更多和标签相关的信息。

## Entry Points 和 Initializers

Fabric Loader 使用 `fabric.mod.json` 来检测和加载你的 mod。

一个 mod 通常包含至少一个 Initializer 类，这个类应该实现了 `ModInitializer`、`ClientInitializer` 和 `ServerInitializer`
这三个接口中的一个。这三个接口都在 `net.fabricmc.api` 包内。如果要修改或者添加 Initializer，你需要找到 `fabric.mod.json`
里的 `entrypoints` 块，然后跟据实际情况修改。`main` 块用于 Mod Initializers，`client` 块用于 Client Mod
Initializers，而 `server` 块用于 Server Mod Initializers。

```json
{
  [...]
  "entrypoints": {
    "main": [
      "net.fabricmc.ExampleMod"
    ],
    "client": [
      "net.fabricmc.ExampleClientMod"
    ]
  }
  [...]
}
```

为了实现 Mod Initializer 系列接口，你必须实现 `onInitializing()`（或者对于 Client 是 `onInitializeClient()`，对于 Server
是 `onInitializeServer()`）函数。然后在里面写上你的代码。

此外，也有一个名称为 `initializers` 的块。

## Maven Group 和 Package 的名称

根据 Oracle 的 Java
文档，它们以小写形式编写，以避免与类或接口的名称冲突。这些名称使用域名反写作为前缀。前往这个链接阅读更多：[https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html](https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html)。
