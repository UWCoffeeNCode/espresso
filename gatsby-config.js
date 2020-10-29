const dotenv = require("dotenv")
const { createProxyMiddleware } = require("http-proxy-middleware")

// Load environment from '.env'.
dotenv.config()

module.exports = {
  siteMetadata: {
    title: `UW Coffee 'N Code`,
    description: `Coffee 'N Code is a beginner-friendly club for people who want to learn to code.`,
    author: `UW Coffee 'N Code Team`,
  },
  developMiddleware: app => {
    app.use(
      "/api/graphql",
      createProxyMiddleware({
        target: process.env.ESPRESSO_API_URL,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "/api/": "/",
        },
      }),
    )
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UW Coffee 'N Code`,
        short_name: `UW CNC`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FDD835`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          src: "./src",
        },
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-apollo`,
      options: {
        uri: `/api/graphql`,
        credentials: `include`,
      },
    },
  ],
}
