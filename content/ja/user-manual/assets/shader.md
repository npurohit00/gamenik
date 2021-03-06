---
title: Shader
layout: usermanual-page.hbs
position: 12
---

シェーダーアセットにはGLSLコードが含まれます。エディタのアセットパネルのNew Shaderをクリックするか、 ```.vert```, ```.frag```, ```.glsl```拡張子でファイルをアップロードすることで、新しいシェーダーアセットを作成することができます。

シェーダーアセットを編集するには、エディタでそれを右クリックしEditを選択します。シェーダーアセットを使用してカスタム素材を作成する例です。

```javascript
var vertexShader = this.app.assets.find('my_vertex_shader');
var fragmentShader = this.app.assets.find('my_fragment_shader');
var shaderDefinition = {
    attributes: {
        aPosition: pc.SEMANTIC_POSITION,
        aUv0: pc.SEMANTIC_TEXCOORD0
    },
    vshader: vertexShader.resource
    fshader: fragmentShader.resource
};

var shader = new pc.Shader(this.app.graphicsDevice, shaderDefinition);
var material = new pc.Material();
material.setShader(shader);
```

