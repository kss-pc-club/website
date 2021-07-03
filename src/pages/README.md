# src/pages

それぞれのページです。

例えば `src/pages/index.tsx` は デプロイ時には `/index.html` になります。

なお、 `{MarkdownRemark.frontmatter__slug}.tsx` は特殊なファイルで、Markdown の記事のテンプレートになっています。<br>
なので、デプロイ時に `{MarkdownRemark.frontmatter__slug}.html` で保存されるわけではないです。

## export の変数名

例えば、デプロイ時に `/aaa/bbb/ccc/ddd.html` となるページに対しては、 `Aaa_Bbb_Ccc_Ddd_page` にしています。<br>
ほかには、要素を export する際には `{Element名}_elem` 、テンプレートには `{Template名}_template` としています。

これにより、export しているものが、ページか要素かテンプレートかを明確にしたり、どこのページを export しているのかを明確にしたりしています。
