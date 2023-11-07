---
title: UTS2 Shader
date: 2023/11/07
categories:
 - Unity
---

## 【重要】关于直接升级到2.0.9版本的注意事项

- 在 v.2.0.5 或更高版本中，你只能覆盖和更新着色器。
- 从v.2.0.4.3p1 或更早版本升级时，在覆盖和更新着色器后，通过从项目窗口中重新选择每个材质来更新材质。BaseMap 将恢复为原样。
- 从v.2.0.4.3p1 或更早版本升级时，HiColor_Power 滑块的灵敏度可能会受到影响。请根据以下进行调整。
  1. 如果 Is_SpecularToHighColor = OFF / Is_BlendAddToHiColor = 0FF，则将 HiColor_Power 值调低。
  2. 如果使用了 Is_SpecularToHighColor = ON，则无需修改它。
- 最新更新和版本历史可以在 README.md 找到。

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/CellLook.jpg)

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/CRS03.jpg)

[![](https://camo.githubusercontent.com/cbcce1eb02e3b114097b176ef1950fe59c063998b5f1a6030f70978de087d107/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f38317547753138697870772f302e6a7067)](https://www.youtube.com/watch?v=81uGu18ixpw)

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/TPK_04.jpg)

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/HiUni01.jpg)

## Unity-Chan Toon Shader 2 简介

Unity-Chan Toon Shader（UTS）是一种卡通渲染器，适用于图像和视频，旨在满足制作卡通风格3D动画的创作者的需求。

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/UT2018_UTS2_SuperTips_10.jpg)

这个卡通着色器被配置为轻松产生所有阴影，这些阴影对角色设计至关重要，例如强调角色模型各部分的形状，而无需担心光源的位置和强度。还可以使用阴影颜色设置使负责颜色设计的人轻松创建阴影。

这个着色器的一个特别强大的功能是能够使用着色器内部的滑块调整阴影，消除了多个光源的需要。

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/0713-06_01.jpg)

在 Unity-Chan Toon Shader Ver. 2.0 中，性能得到了极大的提升；保留了与 Ver. 1.0 相同的渲染功能，同时还允许实现更加复杂的外观。

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/SS_SampleScene.jpg)

除了**基础色**、**第一层阴影色**和**第二层阴影色**这三个基本层次之外，颜色和纹理还可以接受各种自定义选项，例如**高光度**、**边缘光**、**MatCap**（球形映射）和发光。

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/UT2018_UTS2_SuperTips_11.jpg)

在 Unity 中，颜色之间的渐变级别也可以实时调整。

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/UT2018_UTS2_SuperTips_13.jpg)

该着色器还有两个选项，用于创建设计所必需的固定阴影：**位置图**将每个阴影分配到一个固定的投射点，而着**色级别图**可以根据光照调整阴影强度。

有一些其他方便的工具，比如**通过刘海看眼睛和眉毛的可见度**，可以进一步强调动漫风格的外观。

简而言之，Unity-Chan Toon Shader 2.0（UTS2可以实现各种不同的角色设计，从卡通风格到轻小说插画风格都可以。

当然，它也支持 Unity 的系统阴影功能。

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/Comp_ST_UTS2.jpg)

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/Comp_ST_UTS2_2.jpg)

添加后期效果可以让 UTS2 使用非照片级渲染（NPR）来创建任何可以用支持基于物理的渲染（PBR）的标准着色器制作的类似图片元素。

由于最近来自VRChat用户的反馈，已经实现了多种技术来美观地显示字符在各种照明环境中。

亲自体验一下通过使用 Unity-Chan Toon Shader 2.0（UTS2）为您的最佳角色模型上色。

你可能会惊讶地发现，你的角色看起来比以往任何时候都更好。

本手册重点介绍 Unity-Chan Toon Shader Ver. 2.0 的最新版本：**UTS2 v.2.0.9**。

## 目标环境

- UTS2 着色器本身和 UTS2 材质与 Unity 5.6.7f1 或更高版本兼容。（建议使用 Unity 2019.4.31f1 或更高版本）
- 需要使用 Unity 2019.4.31f1 或更高版本才能正确播放示例场景。
- 已测试 Unity 2019.4.31f1 至 Unity 2020.3.34f1、Unity 2021.3.3f1 和 Unity 2022.1.1f1。
- 此软件包是使用 Unity 2019.4.31f1创建的。

此软件包使用前向渲染环境。建议使用线性颜色空间。(伽马颜色空间也可以使用，但这往往会加强阴影的过渡效果。有关更多详细信息，请参见[线性或伽马工作流程](https://docs.unity3d.com/ja/current/Manual/LinearRendering-LinearOrGammaWorkflow.html)。)

## 下载项目

[UnityChanToonShaderVer2_Project (Zip)](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/archive/refs/heads/release/legacy/2.0.zip)

## 安装

1. 解压包含 Unity-Chan Toon Shader 2.0 的项目，直接在文件夹下搜索 `UTS2_ShaderOnly_(版本名称).unitypackage` 文件。

   下面的图片使用的是 `v2.0.6_Release` 版本。

   ![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/Explorer01.jpg)

2. 安装 Unity-Chan Toon Shader 2.0 并打开一个 Unity 项目。

3. 在 Unity 项目窗口中打开 Assets 文件夹。

4. 将 `UTS2_ShaderOnly_v(版本名称).unitypackage` 从操作系统的资源管理器或 Finder 窗口拖放到 Unity 项目窗口中的 Assets 文件夹中。

   ![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/DandD01.jpg)

5. 当导入 Unity Package 窗口打开时，请导入所有文件。

   ![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/ImportWindow01.jpg)

6. 这将在 Assets 文件夹下创建一个已安装 Unity-Chan Toon Shader 2.0 的 Toon 文件夹。

   ![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/ProjectWindow01.jpg)

7. 创建一个新材质，如果在着色器下拉菜单中出现名为 UnityChanToonShader 的部分，则安装已成功完成。

   ![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/NewShader01.jpg)

   

## 基本 UTS2 设置

请参考以下视频，了解如何在着色器球上创建肤色材质的示例。

[![](https://camo.githubusercontent.com/bf0f97120344524a90f5041cc13595920c44d7cdc129d71b7958c0993abc520c/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f7a37507233394e5735446b2f302e6a7067)](https://www.youtube.com/watch?v=z7Pr39NW5Dk)

对于完全不了解 UTS2 的人，建议练习“仅使用基础颜色和第一阴影颜色制作带有步进和羽化效果的图片”，而不是立即尝试使用所有可用功能。

首先熟悉 UTS2 的基础知识非常重要，然后根据需要逐渐添加边缘光和第二个阴影颜色。在练习时可以随意参考以下视频。

[![](https://camo.githubusercontent.com/ab75bf8f06e8e8093412d31374075d5caf26b940baae22529b38dca79bb5ff69/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f38634952357066526968412f302e6a7067)](https://www.youtube.com/watch?v=8cIR5pfRihA)

↑ 设置 UTS v2.0.6 到 Unity 酱的教程

[![](https://camo.githubusercontent.com/812f1cf5aa871faf2886fe643556a2524a27377a2cec0e3736fa7c4109a2a982/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f7144416f35677149657a772f302e6a7067)](https://www.youtube.com/watch?v=qDAo5gqIezw)

↑ UTS2：SD Unity 酱材质 Setup（UTS2 v. 2.0.5）

## 在 UTS2 中使用不同的着色器

打开由 Unity-Chan Toon Shader 2.0（UTS2）安装的着色器类（UnityChanToonShader），可以看到它包含各种着色器文件。

此时，大多数用户会直接关闭它；相反，请仔细查看菜单中的各种名称块。这些名称块（`Toon`、`DoubleShadeWithFeather`、`Clipping`、`StencilMask` 等）实际上是 UTS2 最基本的功能之一。该结构确保具有与菜单中显示的名称块相同的着色器将具有相同的功能。

现在，让我们来看一下每个名称块及其特点。

### UnityChanToonShader 根目录中的着色器

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/UTS2_Standard.jpg)

UTS2着色器分为两个主要类别。

- `DoubleShadeWithFeather`：UTS2的标准着色器。允许使用两种阴影颜色（双重阴影颜色）和颜色之间的渐变（羽化）。
- `ShadingGradeMap`：一种更高级的 UTS2 着色器。除了 DoubleShadeWithFeather 功能外，此着色器还可以包含一个称为 ShadingGradeMap 的特殊映射。

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/Comp_UTS2_Shaders.jpg)

两种类型具有相同的基本特征，因此可以通过匹配颜色（`_Step`）和渐变（`_Feather`）值来实现相同的外观。

选择使用哪种着色器是个人品味的问题，但通常 `DoubleShadeWithFeather` 更适合需要清晰、明确颜色的卡通风格，而 `ShadingGradeMap` 可能更适合颜色更模糊的插图风格。

此外，着色器名称以 `Toon` 开头意味着该着色器**可以使用对象反转公式创建轮廓线**。在 UTS2 中，轮廓线具有许多自定义选项：使用专用纹理制作的轮廓线强度、与基础颜色混合的级别、相机基准偏移等等。

着色器名称也有名称块，例如在结尾处的 `Clipping`。这些代表以下种类的功能。

- `Clipping`：着色器包含剪辑蒙版，一种“纹理省略器”，可以进行切割、溶解等操作。
- `TransClipping`：也表示剪贴蒙版，但在省略纹理时考虑了蒙版的α透明度。这样可以更好地省略，但会比 `Clipping` 创建更大的负载。
- `StencilMask`：使用模板缓冲区来指定某些部分如何通过其他部分可见。例如，对于动漫风格的角色，始终保持眉毛可见而不是被角色的刘海遮盖可能是理想的。此着色器必须始终与 `StencilOut` 类型着色器一起使用。
- `StencilOut`：与 `StencilMask` 类型的着色器一起使用。在上面的例子中，这个着色器将被设置在“刘海”部分，使它们透明，以便“眉毛”部分可见。

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/1230-11_10.jpg)

### UnityChanToonShader/NoOutline 目录下的着色器

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/UTS2_NoOutline.jpg)

`NoOutline` 文件夹中的着色器名称前面都有 `ToonColor`，但这里表示该着色器**没有轮廓特性**。

没有轮廓功能的部分将少一次绘制，因此这些着色器非常适合不需要轮廓或使用高精度卡通线条着色器如 [PSOFT Pencil+ 4 Line for Unity](https://www.psoft.co.jp/jp/product/pencil/unity/) 的设计。

#### 透明材质的透明着色器

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/ToonColor_Transparent.jpg)

一些 `NoOutline` 着色器的名称末尾带有 `Transparent` 名称块。这些是**特殊的透明度着色器**。它们对于需要具有“脸红”外观或玻璃和类似玻璃的物体非常有用。

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/CheekMaterialSetting.jpg)

↑ 腮红材质的示例设置。

[![](https://camo.githubusercontent.com/5aeea8302e9fad777543d7279de44ad2b87c1910c779cdb38b1e71bc3c9d8d54/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f6f417a67554a78503279342f302e6a7067)](https://www.youtube.com/watch?v=oAzgUJxP2y4)

↑ 如何将自定义渲染队列设置为 UTS2 材质。

我将向您展示如何使用 UTS2 v. 2.0.7 为每个材质设置自定义渲染提示。

自定义渲染队列调整非常重要，特别是如果您想准确显示透明材料。本视频中使用的示例场景包含在 UTS2 示例项目中，因此您可以手动移动并检查它。

### UnityChanToonShader/AngelRing 目录下的着色器

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/UTS2_AngelRing.jpg)

`AngelRing` 文件夹包含具有“天使环”功能的着色器。

“天使环”是一种突出效果，如下图所示。它们从相机的角度有一个固定位置。

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/AR_Image.jpg)

只有 UTS2 的高规格 `ShadingGradeMap` 着色器及其变体 `ShadingGradeMap_TransClipping` 着色器具有这种“天使环”功能。这些着色器主要用于“头发”部分，将它们归类为 `StencilOut` 着色器的相似类别，而 `StencilOut` 着色器则被模板省略。

### UnityChanToonShader/Mobile 目录下的着色器

![](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/raw/release/legacy/2.0/Manual/Images_jpg/UTS2_Mobile.jpg)

`Mobile` 文件夹中可以找到轻量级着色器版本，适用于移动和 VR 内容，通常不会改变物体的外观。

为了使这些着色器在移动平台上更轻量，以下功能受到限制。

- **只能使用一个实时定向光（不支持多个灯光和实时点光源）**。
- 使用烘焙点光源和光探针支持点光源。这可能需要对 `GI_Intensity` 进行某些调整。

移动着色器属性与普通的 `Toon_DoubleShadeWithFeather` 着色器和 `Toon_ShadingGradeMap` 着色器兼容，因此如果上述功能可接受，则可以用移动着色器替换它们的标准版本以提高渲染性能。