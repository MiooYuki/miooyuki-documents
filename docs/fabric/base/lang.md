---
title: 创建一份语言文件
date: 2023/10/15
---

你有没有注意到，你的物品显示的名称比较奇怪，例如 *item.tutorial.my_item* ？这是因为您的物品名称没有使用游戏选择的语言进行翻译。翻译用于为单个字符串支持多种不同的语言。

## 创建一个语言文件

你可以使用语言文件为游戏内的可翻译字符串提供翻译。你需要创建的文件的名称应当是语言代码，参见[此链接](https://minecraft.fandom.com/zh/语言)。英语是 en_us，简体中文是 zh_cn，台湾繁体中文是 zh_tw，香港繁体中文是 zh_hk，文言文是 lzh。有了语言代码后，在 <u>resources/assets/模组id/lang/</u> 的位置创建JSON文件，例如英文翻译的文件位置是 <u>resources/assets/tutorial/lang/en_us.json</u>。

## 添加翻译

创建语言文件后，您可以使用此基本模板添加翻译:

```json
// resources/assets/tutorial/lang/zh_cn.json：
{
  "item.tutorial.my_item": "我的物品",
  "item.tutorial.my_awesome.item": "我的物品真棒",
  [...]
}
```

其中第一个字符串是任何可翻译的字符串（例如物品名称或 or `TranslatableTextContent`）。如果您按照 wiki 教程进行操作，请记住将模组id更改为 `tutorial` 或你自己的模组的id。

## 使用自定义可翻译文本

每当函数接受 `Text` 时，您可以选择提供一个 `new LiteralTextContent()`（1.18.2之前）或 `Text.literal()`（1.19之后），这意味着 Minecraft 将按原样使用构造函数参数中的字符串。但是，这是不可取的，因为如果这样做，将很难将文本翻译成另一种语言。 这就是为什么每当需要 `Text` 对象时，都应给它一个带有翻译键的 `new TranslatableTextContent()` 或 `Text.translatable()`，然后在语言文件中翻译该键。例如，添加工具提示时，可在物品类的子类执行以下操作：

```java
@Override
public void appendTooltip(ItemStack itemStack, World world, List<Text> tooltip, TooltipContext tooltipContext) {
    // 1.18.2 之前
    tooltip.add(new TranslatableTextContent("item.tutorial.fabric_item.tooltip"));
    // 1.19 之后
    tooltip.add(Text.translatable("item.tutorial.fabric_item.tooltip"));
}
```

然后在语言文件中添加：

```json
// resources/assets/tutorial/lang/zh_cn.json：
{
  "item.tutorial.fabric_item.tooltip": "我的工具提示"
}
```

当游戏语言为简体中文时，该工具的提示将显示为“我的工具提示”！

### 向可翻译文本添加动态值

假设您希望文本根据某些变量（例如当前日期和月份）进行更改。对于动态的数字，可以在语言项的值中，在你需要数字显示的位置放个 %d，例如:

```json
// resources/assets/tutorial/lang/zh_cn.json：
{
  "item.tutorial.fabric_item.tooltip": "我在第%d天和第%d月的工具提示" 
}
```

然后我们按照在文本中出现的顺序依次传入我们使用的变量。第一个是日期，第二个是月份：

```java
int currentDay = 4;
int currentMonth = 7;
// 1.18 之前
tooltip.add(new TranslatableTextContent("item.tutorial.fabric_item.tooltip", currentDay, currentMonth));
// 1.19 之后
tooltip.add(Text.translatable("item.tutorial.fabric_item.tooltip", currentDay, currentMonth));
```

然后该工具提示将会显示为“我在第4天和第7月的工具提示”。如果需要传入字符串，使用 `%s` 而非 `%d`。如果需要直接显示 `%`，使用 `%%`。如果需要指定顺序，可以使用如 `%1$s`、`%2%s` 这样的语法。更多信息请参见 [Java String.format](https://dzone.com/articles/java-string-format-examples)。

### 添加新行

由于 Mojang 的充满独特特性的代码，在工具提示中，`\n` 不会正常生效。因此如果需要多行字符串，需要将翻译键拆分成多个键：

```json
// resources/assets/tutorial/lang/en_us.json：
{
  "item.tutorial.fabric_item.tooltip_1": "我的工具提示的第1行",
  "item.tutorial.fabric_item.tooltip_2": "我的工具提示的第2行" 
}
```

然后分别加入 `TranslatableTextContent` 或 `Text.translatable` 部分：

1.18.2之前：

```java
tooltip.add(new TranslatableTextContent("item.tutorial.fabric_item.tooltip_1"));
tooltip.add(new TranslatableTextContent("item.tutorial.fabric_item.tooltip_2"));
```

1.19之后：

```java
tooltip.add(Text.translatable("item.tutorial.fabric_item.tooltip_1"));
tooltip.add(Text.translatable("item.tutorial.fabric_item.tooltip_2"));
```

工具提示就会显示为：

```text
我的工具提示的第1行
我的工具提示的第2行
```

# 翻译格式

您注册的对象的翻译键的格式为`<对象类型>.<命名空间>.<路径>`（命名空间和路径就像在 `Identifier` 中注册的那样）。

| 对象类型 | 格式                                | 例子                                              |
| :------- | :---------------------------------- | :------------------------------------------------ |
| 方块     | `block.<modid>.<registry-id>`       | `“block.tutorial.example_block”: “Example Block”` |
| 物品     | `item.<modid>.<registry-id>`        | `“item.tutorial.my_item”: “My Item”`              |
| 物品组   | `itemGroup.<modid>.<registry-id>`   | `“itemGroup.tutorial.my_group”: “My Group”`       |
| 流体     | `fluid.<modid>.<registry-id>`       |                                                   |
| 声音事件 | `sound_event.<modid>.<registry-id>` |                                                   |
| 状态效果 | `mob_effect.<modid>.<registry-id>`  |                                                   |
| 附魔     | `enchantment.<modid>.<registry-id>` |                                                   |
| 实体类型 | `entity_type.<modid>.<registry-id>` |                                                   |
| 药水     | `potion.<modid>.<registry-id>`      |                                                   |
| 生物群系 | `biome.<modid>.<registry-id>`       |                                                   |

对于不在此列表中的类型，请参见 `net.minecraft.registry.Registry`。