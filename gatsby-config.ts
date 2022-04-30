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
    youtube: `UC60LrAyqIHUkqCmzhN2N4Rg`,
  },
}

const config: GatsbyConfig = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-root-import`,
    `gatsby-transformer-json`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `achievements`,
        path: `content/achievements`,
      },
    },
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
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-external-links`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
              quality: 90,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-katex`,
        ],
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
        start_url: `/?utm_source=homescreen`,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `minimal-ui`,
        icon: siteFavicon,
      },
    },
  ],
}

export default config
