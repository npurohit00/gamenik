---
title: 立方体贴图
layout: usermanual-page.hbs
position: 7
---

立方体贴图是一种特殊类型的纹理资源。 立方体贴图由6个纹理资源组成，其中每个纹理表示立方体的一个面， 它们通常有两种用途：

1.立方体贴图可以定义场景的天空盒。 天空盒包含您的场景的遥远视觉的图像，例如山丘，山脉，天空等。
2.立方贴图可以向其它材料添加反射效果。 想象一下你的场景中有一个光泽的铬球轴承，球表面反映了周围的场景。 对于开放环境，通常将场景中天空的立方体贴图设置为物体材质上立方体贴图的反射内容。

<iframe src="https://playcanv.as/b/xp7v1oFB/" allowfullscreen></iframe>

## 导入立方体贴图

一个立方体贴图需要六个纹理资源作为输入资源。 因此，为了完全配置新的立方体资产，您必须首先将6个图像导入到项目中。 要执行此操作，只需将6个图像从文件系统拖动到“资源”面板(或选择“资源”面板的上传选项)。 上传和处理后，图像将显示在“资源”面板中，现在可以将其分配给立方体贴图资源。

## 创建立方体贴图

您可以直接从PlayCanvas编辑器界面的“资源”面板中的“创建资源”菜单创建新的立方体资源。

![立方体贴图创建][1]

这将创建一个新的立方体贴图资源并打开屏幕右侧的立方体贴图编辑器。

## 选中立方体贴图

要选择cubemap以编辑它，请在“资源面板”中选择它。 最简单的方法是选择cubemap过滤器来缩小选择的选项。 Cubemaps由十字形缩略图标识:

![立方体贴图缩略图][2]

选择立方体贴图时，它将被加载到编辑器右侧的“检查器”面板中。

## 立方体贴图属性

一旦你选择了一个立方体贴图，你可以对它的属性进行编辑。

![立方体贴图属性][3]

### Filtering
此设置确定立方体像素的像素在放大时如何插值。 当纹素到屏幕像素的比率小于1时是放大。此值可以线性调整在视觉上最好的效果。

### 各向异性
各向异性是一个从1和16之间的值，它控制纹理采样的质量，从而让摄像机的视图矢量与纹理表面的排列变得更紧密。

## 将纹理分配给立方体贴图

![立方体贴图预览][4]

“立方体预览”面板显示一个立方体贴图的六个面，并将其平面化为十字形。 想象一下已经展开平放的纸板箱。 要构造立方体贴图，只需将纹理资源从“资源”面板拖动到“预览”面板中的代表面的孔中。 您还可以选择立方体的某个面，然后从“资源”面板中选择替换的纹理资源。

立方体贴图的面必须为:

*方形(宽和高的分辨率相同)
*宽为二的次幂(1x1,2x2,4x4,8x8,16x16,32x32等)
*所有面都必须具有相同的分辨率

为了辅助你，编辑器试图找出如何智能地自动分配纹理到面中。 当您尝试通过将一个面贴图拖动到面插槽并按照常用的立方体贴图面的命名约定匹配时执行此操作，例如：

* negx, posx, negy, posy, negz, posz
* left, right, top|up, bottom|down, front|forward, back|backward
* 0-5|1-6

一个已匹配的纹理集的示例：

* face_posx.jpg
* face_negx.jpg
* face_posy.jpg
* face_negy.jpg
* face_posz.jpg
* face_negz.jpg

## Image Based Lighting

This technique allows to use Environment Map such as CubeMap in order to simulate physically based ambient light and reflection on materials. [Read more][6] on how it works and how to author CubeMaps for IBL.

## 将立方体贴图分配给材质

默认的蓬状和物理的材质都具有反射特性。如果展开环境属性部分，您将看到以下内容：

![立方体贴图材质][5]

您可以单击空槽以选择立方体图或将立方体资源从资源面板拖放到立方体贴图的插槽中。

注: 物理材质如果被分配和预过滤将被作为默认环境贴图使用到场景天空盒。

[1]: /images/user-manual/assets/cubemaps/cubemap-create.png
[2]: /images/user-manual/assets/cubemaps/cubemap-thumbnails.png
[3]: /images/user-manual/assets/cubemaps/cubemap-properties.png
[4]: /images/user-manual/assets/cubemaps/cubemap-preview.png
[5]: /images/user-manual/assets/cubemaps/cubemap-material.png
[6]: /user-manual/graphics/physical-rendering/image-based-lighting/

