---
title: デバッグ
layout: usermanual-page.hbs
position: 8
---

PlayCanvasのスクリプトを作成するためには、ブラウザの開発ツールにアクセスして使用する方法を知っていることが重要です。

Chrome、Firefoxや他のブラウザでは、ブラウザに直接組み込まれているDeveloper Toolがあります。通常、Mac上でALT-CMD-I、WindowsではF12キーを押すことでアクセスすることができます。またはブラウザのメニューを使用して開発者ツールにアクセスすることができます。

### デバッグスクリプト

スクリプトをデバッグするためには、Developer Tools (Chrome)でSourcesタブを選択します。Sourcesペインの左上隅にあるアイコンをクリックして 'navigator' を開きます。以下のようなものが表示されるはずです：

![デバッガ][1]

Firefoxでは次のようになります：

![Firefox][2]

ナビゲーターには、自身で書いたPlayCanvasスクリプトを含む、現在アクティブなタブで実行している全てのスクリプトがリストされます。ナビゲーターからスクリプトを探し選択するとソースコードが開きます。これで、ブレイクポイントを設定してデバッグが行えます。

各ブラウザには、JavaScriptをデバッグする方法の手順が詳述されています。これらのドキュメントをお読みください：[Chrome][3], [Firefox][4], [Safari][5], [Edge / Internet Explorer][6]。

<div class="alert alert-info"> 実行しているappがデバッガーのブレイクポイントで一時停止された場合、そのappを起動するのに使用される他のブラウザ内ウィンドウ／タブ (PlayCanvas Code EditorまたはEditorなどを含む) も一時停止される可能性があります。 </div>

### Debugging on Mobile Devices

On Android, it is possible to connect to the mobile Chrome browser via the desktop Chrome browser devtools and USB cable. [Google Developer documentation][7] has the detailed steps for the setup.

iOS debugging requires access to a Mac and [Apple has outlined the steps][8] needed to enable developer options to start debugging.

In the situation where either it's not possible to connect to the web view directly from Chrome or Safari (e.g. a web view in another app) or don't have access to a Mac, the following libraries and services can help and are simple to add to projects:

* [RemoteJS][9] - Allows developers to view the console output remotely in a desktop browser and also execute JS in the console which makes it very powerful. The console output can be delayed or slow though.
* [vConsole][10] or [Eruda][11] - Adds a widget DOM object to the page that can be expanded to show console output, network requests, the page elements and more.

[1]: /images/user-manual/scripting/debugging/chrome-debugger.jpg
[2]: /images/user-manual/scripting/debugging/firefox-debugger.jpg
[3]: https://developers.google.com/web/tools/chrome-devtools/javascript
[4]: https://developer.mozilla.org/en-US/docs/Tools/Debugger
[5]: https://developer.apple.com/safari/tools/
[6]: https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/debugger
[7]: https://developer.chrome.com/docs/devtools/remote-debugging/
[8]: https://webkit.org/web-inspector/enabling-web-inspector/
[9]: https://remotejs.com/
[10]: https://github.com/Tencent/vConsole
[11]: https://github.com/liriliri/eruda

