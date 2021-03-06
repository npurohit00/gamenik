---
title: ユーザインターフェイス
layout: usermanual-page.hbs
position: 18
---

ユーザインターフェイスは、グラフィカルアプリケーション固有の課題です。PlayCanvasにはユーザインタフェースを構築するためのいくつかのオプションがあります。

## スクリーン＆要素のコンポーネント - 推奨

![イントロ][1]

PlayCanvasは、WebGLキャンバスの内部で直接実行されるユーザインターフェイスシステムのビルディングブロックを構成できる２つのコンポーネントを実装しています。 [スクリーンコンポーネント][2]はユーザインタフェースコンテナであり、[要素コンポーネント][3]はユーザインタフェースの要素を追加するために使用されます。主な利点は、ゲームの他の部分と同じコンテキストでユーザインターフェイスが存在することです。これにより、アプリケーションとユーザインターフェイス間のインタラクションが可能になります。

## DOM, HTML & CSS

ウェブブラウザは、複雑なインタフェースをユーザにレンダリングする、効果的かつ最適化されたシステムを構築するために長年を費やしてきました。ユースケースによってはHTML、CSS、ブラウザDOMがユーザインターフェイスに適しています。

DOMを使用する主な欠点はパフォーマンスです。DOMは、高いフレームレートのリアルタイム設定で実行されるようには設計されていません。ページのリフローとガベージコレクションは、アプリケーション内で不具合を引き起こす可能性があります。アプリケーションで一貫した60fpsを目指している場合、これは最善の選択肢ではありません。

---

このユーザーガイドの残りの部分では、スクリーンと要素コンポーネントシステムに焦点を当て、それらを使用してPlayCanvasでユーザーインターフェイスを構築します。

[1]: /images/user-manual/user-interface/user-interface-intro-sq.png
[2]: /user-manual/packs/components/screen
[3]: /user-manual/packs/components/element

