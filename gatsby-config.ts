import type { GatsbyConfig } from 'gatsby'

const siteTitle = `Koga Secondary School - PC Club`
const siteUrl = `https://kss-pc.club`
const siteDescription = `KSS PC Club's Website`
const backgroundColor = `#09090f`
const themeColor = `#15171a`
const siteFavicon = `content/assets/favicon.png`
const siteDefaultOgpImage = `/images/ogp_default.png`

const siteMetadata = {
  title: siteTitle,
  titleTemplate: `%s | ${siteTitle}`,
  siteTitleAlt: `KSS PC Club's Website`,
  siteHeadline: `KSS PC Club's Website`,
  siteUrl: siteUrl,
  description: siteDescription,
  siteLanguage: `ja`,
  siteDefaultOgpImage,
  author: `KSS PC Club`,
  basePath: `/`,
  social: {
    github: `kss-pc-club`,
  },
}

const config: GatsbyConfig = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-root-import`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `content/articles`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`, `gatsby-remark-external-links`],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@styles': 'src/styles',
          '@utils': 'src/utils',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        Scope: `/`,
        start_url: `/?utm_source=homescreen`,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `minimal-ui`,
        icon: siteFavicon,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          outputStyle: 'compressed',
        },
        cssLoaderOptions: {
          camelCase: false,
        },
        sassRuleTest: /\.global\.s(a|c)ss$/,
        sassRuleModulesTest: /\.module\.s(a|c)ss$/,
      },
    },
  ],
}

export default config
