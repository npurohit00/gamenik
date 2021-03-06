---
title: 物理ベースレンダリング
layout: usermanual-page.hbs
position: 3
---

![Star-Lord][1]
*Star-Lordモデル [Joachim Coppens][2]*

物理ベースレンダリング(PBR)では、一貫性のあるグラフィクスレンダリングが、アーティストによる素材作成、計測された物理的プロパティとマテリアルシェーダの組み合わせによって実現されます。光源と物体表面との関係をあらわす物理原則を適応することで、どのような照明環境でも特別な処理をすることなく自然な描画を行うことができます。

# 基礎となる原理

ここでは、物理ベースのシェーダが実行するライティングの計算の基礎となる原則を説明します。次のセクションでは物理ベースのレンダリングをどのようにPlayCanvas上で使用するかを詳しく説明します。

## 拡散(Diffuse)とスペキュラ(Specular)

拡散と反射(あるいはスペキュラ)は光源とマテリアル間の関係をあらわす二つの主要な要素を表現するための用語です。反射光は物体表面で反射した光をあらわします。なめらかな表面では反射した光はすべて同じ方向に進み、表面は鏡のように見えます。拡散光は物体に一旦吸収され、物体内で反射されて再び放出される光です。この光は反射光とは違い、すべての方向に同じように放出されます。また、吸収と再放出が行われる際に、特定の波長の光は吸収されます。物体に吸収されなかった波長の光はその物体の色となります。例えば、青と緑の波長の光が吸収された場合にはその物体は赤く見えます。レンダリング用語では、拡散色は"アルベド"や"ベースカラー"と呼ばれます。

## エネルギーの保存

![Energy Conservation][3]
*なめらかな表面には鋭く明るいハイライトがあらわれ、粗い表面には広くぼんやりとしたハイライトがあらわれます。*

物理的に正しいレンダリングの重要な要素は、エネルギーの保存です。拡散光と反射光がどちらも物体表面に投射される光から発生していることから考えると、拡散光と反射光を足しあわせた総量は、物体表面に投射された光の総量を上回ることはできません。この法則が現実世界で意味することは、物体表面の反射率が高ければ拡散光は非常に小さくなり、反対に拡散光が大きければ反射はあまり起こらないということになります。

物理ベースのレンダリングの利点は、このエネルギー保存則がシェーダに内包されているということです。アーティストは法則を考えなくても物理ベースのレンダリングを行うことができます。

## 金属と非金属

![Metals & Non-metals][4]
*金属と非金属*

物理ベースのレンダリングとこれまでのシェーディングモデルの違いの一つは、マテリアルの振る舞いを、物体がどのようなものでできているか、ということを考慮して決めることです。ここで考慮する主な要素は、その物体が伝導体(通常は金属)であるか、あるいは絶縁体(通常は非金属)であるかということです。

この要素はマテリアルがどのように光に反応するかということの多くを決定する重要なものです。例えば、金属は一般的に光を反射します。(60%から90%ほど) 一方で非金属は光をあまり反射しません。(0%から20%ほど) つぎに、非金属の反射光は通常白色光ですが、金属の反射光は拡散光と同じ色になります。

この違いのため、物理ベースのレンダリングの設定手順の一つでは、そのマテリアルが金属か非金属かを決定する**金属質(metalness)**プロパティを使用します。金属質を使った設定手順は後ほど詳しく説明します。

## フレネル

フレネルはPlayCanvasで物理ベースのレンダリングを使う上で理解しなければいけない要素ではありません。ただ、この要素を理解することで、物体が光に対してどのように振る舞うかをより深く知ることができます。

フレネルは、物体を見る視線とその物体表面の角度によって、その物体の反射光成分がどのように影響を受けるかということを表現します。もし物体表面が視線とほとんど平行なら、その表面はほとんど完全に光を反射します。

## 微細表面

最後に微細表面について説明します。3Dアーティストにとって親しみやすいこの概念の表現は法線マップでしょう。このテクスチャを与えると、その表面の方向を変えることができます。光沢度や粗さとも呼ばれる微細表面は、これと同じ概念を非常に小さなスケールで表現します。微細表面はその物体表面が粗いのかなめらかなのかをあらわします。ガラス(光沢度が高く、粗さは低い)とサンドペーパー(光沢度が低く、粗さは高い)を比べてみてください。この方法では、表面がどちらを向いているかは表現せず、単に表面が粗いかなめらかかということだけを表現します。

いくつかの物理ベースのレンダリングシステムは粗さという表現を使い、いくつかは光沢度という表現を使いますが、それらは同じものです。粗さを反転すると光沢度になり、その逆も行うことができます。もし変換を行いたい場合には、単純にテクスチャの値を反転してください。

[物理的マテリアルに続く][6]

*さらに詳しい説明は、Marmoset Toolbagの[PBR Theory][5]という素晴らしい記事を参照してください。*

[1]: /images/user-manual/graphics/physical-rendering/star-lord.jpg
[2]: https://www.joachimcoppens.com/
[3]: /images/user-manual/graphics/physical-rendering/energy-conservation.jpg
[4]: /images/user-manual/graphics/physical-rendering/materials.jpg
[5]: https://www.marmoset.co/toolbag/learn/pbr-theory
[6]: /user-manual/graphics/physical-rendering/physical-materials

