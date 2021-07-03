# .husky

GitのCommit時などに任意のコードを実行できる [Husky](https://github.com/typicode/husky) の設定ディレクトリです。

 - `pre-commit` : Commit前に実行します。現状では `yarn -s run lint-staged` のみを実行するように設定しています。