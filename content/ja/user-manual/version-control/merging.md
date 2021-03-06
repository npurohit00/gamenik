---
title: Merging and resolving conflicts
layout: usermanual-page.hbs
position: 3
---

マージとは、1つのブランチで行っていた作業を、別のブランチで行っていた作業と組み合わせる工程のことです。マージは、ブランチベースのワークフローでは必ず出てくる工程で、詳細は [branches documentation][1]で説明しています。

## 2つのブランチをマージする

PlayCanvasでは、マージの際に2つのブランチから、チェックポイントを2つとり、前回のチェックポイントから生じた変更を計算し、これらの変更を1つに組み合わせ（時には競合する変更を解消するため助けを求め）、最終的に新しい2つのチェックポイントをマージした結果のチェックポイントを作成します。

まず、大切なことはPlayCanvasでマージを行う際、実際に2つのブランチをマージするわけではないことを頭に置くことです。実際に行うのは、2つのチェックポイントのマージです。2つのブランチのどちらかに、最新のチェックポイントよりも後に行われた変更がある可能性があるので、重要です。そのような場合PlayCanvasが自動的にチェックポイントを作成して変更を見落とさないようにします。

### マージの例

![Merging checkpoints][6]
*変更点YおよびZはマージ結果Cに含まれず、**紛失**されました。*

![Merging checkpoints][7]
*デフォルトでは、PlayCanvasがマージ先のブランチに新しいチェックポイントを作成するため、変更点Yも含まれます。*

![Merging checkpoints][8]
*変更点Zが必要な場合、マージを開始する前に元のブランチにチェックポイントを作成します。*

## マージを開始する

![Start merge][3]

マージを開始するには、現在のブランチをマージ先となるブランチに切り替えます。その後、マージ元となるブランチを選択し、ブランチのドロップダウンメニューから "Merge into current branch（現在のブランチにマージ）"を選択します。

これでマージ処理が開始されます。

### 自動マージ

2つのチェックポイントをマージすると、PlayCanvasは自動的に競合状態にないブランチの変更をマージしようとします。多くの場合、2つのブランチは自動で完全にマージされます。自動マージではマージが完了すると、エディタがマージ済の変更を細心のブランチにリロードします。

### 競合を解消する

2つのブランチに競合する変更がある場合、自動的にマージされません。両方のブランチで同じエンティティの位置に変更を加えた場合などが競合する変更の例です。2つの最終位置のどちらを取るか、システムが決定することはできません。

2つのブランチをマージする際、1つまたは複数の競合が発生していると、エディタにコンフリクトマネージャーが表示されます。マージが完了する前に競合を1つずつ解消してください。

### コンフリクトマネージャー

![Conflict Manager][4]

コンフリクトマネージャーは競合しているリソースを左に、そして選択済みのリソースに対しては元のバージョン（Base）と各ブランチでのバージョンとの比較を表示します。競合しているプロパティは、どちらを採用するか選択します。すべてのリソースのすべてのプロパティの競合が解消されたら、「Complete Merge」ボタンをクリックしてマージを完了し、新しいチェックポイントを作成します。

![Resolved Conflicts][5]

コンフリクトマネージャーがマージ作業を行っている間、現在のブランチはロックされ、他のユーザーが編集できないようにします。競合の解消が完了したときに、変更が上書きされるのを防ぐためです。マージするのに必要なブランチを他のユーザーがブロックしている場合、エディタから強制終了することができます。

[1]: /user-manual/version-control/branches

[3]: /images/user-manual/version-control/start-merge.jpg
[4]: /images/user-manual/version-control/conflict-manager.jpg
[5]: /images/user-manual/version-control/conflicts-resolved.jpg

[6]: /images/user-manual/version-control/merging-checkpoints-1.png
[7]: /images/user-manual/version-control/merging-checkpoints-2.png
[8]: /images/user-manual/version-control/merging-checkpoints-3.png

