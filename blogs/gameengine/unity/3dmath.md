---
title: 三维数学
date: 2023/11/07
categories:
 - Unity
---

## 向量

向量是一个**有大小，有方向的量**。可以形象化地表示为带箭头的线段。箭头所指：代表向量的方向；线段长度：代表向量的大小。

二维向量在 Unity 中的类是 `Vector2`。

这里假设新建了一个二维向量对象：`Vector2 v = new Vector2(2.0f, 3.0f);` 二维向量 v 的分量 x 是 2.0；分量 y 是 3.0。v 的方向就是笛卡尔坐标系中 `(2, 3)` 这个点的位置。

v 的大小（模）可根据毕达哥拉斯定理（勾股定理）计算得出：$\sqrt{2^2 + 3^2}\approx3.605$

![](/imgs/blogs/gameengine/unity/3dmath/vector-define.png)

### 向量的运算

**向量加法**：向量相加，就是将两个向量的分量分别进行相加。

假设有二维向量 `v1 = (3.0, 2.0)`，`v2 = (-2.0, 4.0)`，`v3 = v1 + v2`

那么 v3 就等于：$v3(v1.x+v2.x, v1.y+v2.y) = v3(1.0, 6.0)$ 

![](/imgs/blogs/gameengine/unity/3dmath/v3express.png)

它们之间的关系是：**v1 和 v2 头尾相连**。

![](/imgs/blogs/gameengine/3dmath/relation.png)