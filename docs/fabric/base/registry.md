---
title: 注册表介绍
date: 2023/09/29
---

你需要将你添加到游戏的绝大多数内容注册进去，这有利于：

- 让游戏知道你的内容存在
- 在客户端和服务器之间验证游戏内容
- 存储时处理无效内容
- 避免不同模组之间的冲突
- 利于客户端和服务器之间的沟通和数据储存
- 抽象化隐藏数字 ID

注册任何类型内容时，你传入一个 `Identifier`，也就是你需要加入的内容的标识符。标识符，简称
ID，通常拥有一个命名空间（namespace）和路径（path）。大多数情况下，命名空间是你的模组的ID，路径则是你要注册的内容的（英文）名称。比如，标准的泥土方块的
ID 为 `minecraft:dirt`。

不注册就使用自定义内容容易导致bug，比如缺失材质、世界保存问题和崩溃。游戏通常会让你知道你是否忘记注册了某个东西。

## 注册类型
 
注册内容时，你需要指定将内容加入哪个注册表。基本的游戏提供所有原版内容的注册表，可以在 `Registries`（1.19.3 以上）或
`Registry`（1.19.2 以下）中找到。例如，你很有可能会使用用于物品的 `Registries.ITEM`（1.19.3 以上）/`Registry.ITEM`（1.19.2 以下）和用于方块的
`Registries.BLOCK`（1.19.3 以上）/`Registry.BLOCK`（1.19.2 以下）。

如需详细了解所有可用的注册表，请阅读注册表类型页面。

## 注册内容

使用Registry.register以将内容添加到注册表：

```java
public static <T> T register(Registry<? super T> registry, Identifier id, T entry) {
    return ((MutableRegistry)registry).add(id, entry);
}
```

**registry** - 你需要将内容添加到的注册表的实例。位于 `Registry` 中的所有原版注册表的列表，可以在注册表类型页面中找到。

**id** - 注册表内，你的内容的一个标识符。标准的格式为 `模组ID:名称`，就像 `minecraft:dirt` 这样。

**entry** - 你需要注册的内容的实例。

## 注册表方法

`get` - 返回与注册表内ID关联的项（entry）。如果项不存在，`DefaultedRegistry` 返回默认注册表值，`SimpleRegistry` 返回 null。

```java
@Nullable
public abstract T get(@Nullable Identifier id);
```

`getId` - 返回注册表内与项关联的 `Identifier`。如果项不存在，`DefaultedRegistry` 返回默认注册表标识符，`SimpleRegistry` 返回null。

```java
@Nullable
public abstract Identifier getId(T entry);
```

`getRawId` - 返回注册表内与项关联的内部整数 ID。如果项不存在，`DefaultedRegistry` 返回默认注册表值的原始 ID，`SimpleRegistry` 返回-1。

```java
public abstract int getRawId(@Nullable T entry);
```