---
title: 标准注册表
date: 2023/09/29
---

Minecraft拥有多种内容的注册表，比如方块、物品和实体的注册表。以下为原版注册表：

（注意：对于 1.19.3 以及以上的版本，请将 `Registry` 替换为 `Registries`。）

## 一般注册表

这些注册表对很多类型的模组都有用：

- `Registry.REGISTRIES`
  - 包含所有的注册表。
- `Registry.BLOCK`
  - 包含所有的方块。
- `Registry.ITEM`
  - 包含所有的物品（包括方块物品）。
- `Registry.BLOCK_ENTITY_TYPE`
  - 包含每个方块实体的 `BlockEntityType`。方块实体类型用来反序列化方块实体并储存兼容的方块。
- `Registry.STATUS_EFFECT`
  - 包含所有的状态效果，如隐身和夜视。
- `Registry.PARTICLE_TYPE`
  - 包含所有的粒子类型。
- `Registry.FLUID`
  - 包含所有的流体。
- `Registry.ENCHANTMENT`
  - 包含所有的附魔。
- `Registry.POTION`
  - 包含所有不同的药水类型，比如“long potion of night vision”“water”或“potion of luck”。
- `Registry.DIMENSION_TYPE`
  - 包含所有的维度类型。
- `Registry.SCREEN_HANDLER`
  - 包含所有的屏幕处理器（screen handlers）。屏幕处理器用于在服务器和客户端之间同步 GUI 状态。
- `Registry.RECIPE_TYPE`
  - 包含所有的配方类型。
- `Registry.RECIPE_SERIALIZER`
  - 包含所有的配方序列化器。配方序列化器用于加载配方，同一类型可以有多个序列化器（例如有序和无序合成配方）。
- `Registry.PAINTING_MOTIVE`
  - 包含所有的画的类型。
- `Registry.SOUND_EVENT`
  - 包含所有的声音事件如 `entity.item.pickup`。
- `Registry.STAT`
  - 包含所有不同的统计类型。统计使用泛型 `<T>`，用于获取不同 `T` 值的不同数据。
    - 不依赖于外部内容的统计，如 `walk_one_cm`，使用 `custom` 统计类型，它使用注册的 `Identifier` 作为 T 类型。
    - 不属于 `custom` 统计的统计可能依赖于特定的方块或者物品类型，如 `Stats.MINED`。
- `Registry.CUSTOM_STAT`
  - 包含所有的“自定义统计”，即不依赖于外部内容的统计 ID。

## 实体

绝大多数这些注册表，除了 `ENTITY_TYPE` 自身，都与实体 AI 有关。

- `Registry.ENTITY_TYPE`
  - 包含每个实体的实体类型（`EntityType`）。类似于方块实体类型，实体类型用于同步和取消序列化。
- `Registry.SCHEDULE`
  - 包含实体（通常是村民）的时刻表。时刻表控制实体基于一天内时间的行为。
- `Registry.ACTIVITY`
  - 控制实体（通常是村民）的活动。这些活动，比如 `play` 或 `work`，控制实体的行为。
- `Registry.SENSOR_TYPE`
  - 包含每个实体传感器的类型。传感器允许实体“感受”不同的事物，并将其储存在记忆中。
  - 类似于时刻表和活动，主要用于村民。
- `Registry.MEMORY_MODULE_TYPE`
  - 包含所有类型的记忆模块。记忆模块描述了实体能够记住的不同内容。
- `Registry.VILLAGER_TYPE`
  - 包含所有村民生物群系类型。
- `Registry.VILLAGER_PROFESSION`
  - 包含所有村民职业。
- `Registry.POINT_OF_INTEREST_TYPE`
  - 包含所有兴趣点乐行。兴趣点允许实体寻找世界内的不同方块，比如村民工作站点。也用于寻找下界传送门。

## 世界生成

Minecraft的世界生成比较复杂，对于世界生成有许多不同的注册表。

- `Registry.BIOME`
  - 包含所有的生物群系。
- `Registry.FEATURE`
  - 包含所有的地物，包括结构。
- `Registry.STRUCTURE_FEATURE`
  - 包含所有的结构地物。
- `Registry.CARVER`
  - 包含所有的雕刻器。雕刻器用于创建洞穴和峡谷。
- `Registry.DECORATOR`
  - 包含所有的装饰器。装饰器用于安放特征。
- `Registry.BIOME_SOURCE_TYPE`
  - 包含所有的生物群系源类型，这决定了生成世界时使用哪些生物群系。
- `Registry.TREE_DECORATOR_TYPE`
  - 包含所有的树木装饰器类型。这些装饰器添加一些附加方块，例如蜂箱、藤蔓。
- `Registry.FOLIAGE_PLACER_TYPE`
  - 包含所有的树叶放置器类型，用于生成树叶。
- `Registry.BLOCK_STATE_PROVIDER_TYPE`
  - 包含所有的方块状态提供器类型，用于基于位置选择可能的随机方块状态。
- `Registry.BLOCK_PLACER_TYPE`
  - 包含所有的方块放置器类型，用于在 `RandomPatchFeature` 之类的地形中放置方块。
- `Registry.CHUNK_GENERATOR_TYPE`
  - 包含所有的区块生成器类型。区块生成器决定了地形的基本形状，如 `surface` 生成类似于主世界的地表地形，`caves` 用于生成类似于下界的洞穴地形，`floating_islands` 用于生成类似于末地的浮岛类型。
- `Registry.CHUNK_STATUS`
  - 包含所有的区块状态类型。区块状态描述了区块中世界生成的当前进展。
- `Registry.STRUCTURE_PIECE`
  - 包含所有的结构构件。结构构件是结构的小部分，例如单间房间。
- `Registry.RULE_TEST`
  - 包含所有的规则测试类型，用于在世界生成中匹配方块。
- `Registry.STRUCTURE_PROCESSOR`
  - 包含所有的结构处理器类型。结构处理器会在结构生成后对其进行修改。
- `Registry.STRUCTURE_POOL_ELEMENT`
  - 包含所有的结构池元素。结构池元素时结构的更小部分，包含在池结构构件中，用于生成基于数据包的结构（例如使用拼图的结构）。
- `Registry.SURFACE_BUILDER`
  - 包含所有的地表构造器。地表构造器用于放置生物群系的地表，例如许多主世界生物群系的草。