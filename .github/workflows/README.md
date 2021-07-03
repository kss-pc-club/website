# .github/workflows

変更を上げた際などに自動で実行される 「GitHub Actions」の設定ファイルが置かれています。

 - `deploy.yml` : 変更がPushされた際、自動でビルドし、画像を圧縮したうえで、 `deploy` ブランチへデプロイします。
 - `image_compress.yml` : Pull Requestに自動で、または毎週日曜の昼12時に自動で、このリポジトリ内の画像を適度に圧縮してくれます。手動で実行することも可能です。