# KSS PC Club - Website

## このリポジトリは？

古河中等パソコン部の Web サイトです。

https://kss-pc.club/

## 開発方法

### 開始手順

1. Node.js と Yarn をインストールします。
2. このリポジトリを Clone します。
3. `yarn install --frozen-lockfile` します。
4. `yarn husky:prepare` でコミット前の自動整形等の準備をします。
5. `yarn start` でローカルサーバー（http://localhost:8000/） を立ち上げます。

### コード整形ツールについて

このリポジトリでは、Prettier をコード整形ツールとして導入しています。<br>
`yarn prettier:check` で整形すべきファイルの一覧を表示し、`yarn prettier:format` で整形します。<br>
なお、コミット時に自動で整形されます。

主に整形される点は以下の通りです。

- 折り返し地点（80 文字）で改行する
- インデントのサイズは 2 にする
- タブの代わりにスペースを使う
- セミコロンが不要ならつけない
- ダブルクォーテーションではなく、シングルクォーテーションを使う
- 不要なカンマを取り除く
- 括弧の前にスペースをつける
- アロー関数の引数に括弧をつける

## リファレンス

必要環境については、[SECURITY.md](./SECURITY.md) を見てください。

行動規範については、[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) を見てください。

貢献したい方は、[CONTRIBUTING.md](./CONTRIBUTING.md) を見てください。

ライセンスは、MIT License です。詳しくは、 [LICENSE file](./LICENSE) をご覧ください。
