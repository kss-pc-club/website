---
date: 2021-07-01
last_update: 2022-05-01
title: Tips - 独自ドメイン設定方法
description: プロジェクトなどで、GitHubリポジトリに独自ドメインを設定する方法を紹介しています。
---

1. リポジトリページを開きます。<br>![](01.png)<br><br>
2. 上部「Settings」をクリック。<br>![](02.png)<br><br>
3. 左の「Pages」をクリック。「Source」を自分が公開したいもの（ここでは「`master branch`」）に変更します。<br>![](03.png)<br><br>
4. 「Custom domain」に自分が申請したドメインを入力します。<br>![](04.png)<br><br>
5. スプレッドシートに記入し、部長に設定を変更してもらいます。<br>スプレッドシートの URL は Slack から。<br><br>
6. 「Your site is published at ～」と表示されているのを確認します。<br>![](05.png)<br><br>
7. このままでは常時 TLS 化されていないので、「Enforce HTTPS」をオンにします。<br>![](06.png)<br><br>
8. 任意で、リポジトリページに表示される、プロジェクト URL を変更できます。<br>![](07.png)
   ![](08.png)

おわり。
