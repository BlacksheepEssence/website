require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Blacksheep spirit`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        projectsPath: `content/products`,
        projectsUrl: `/produits`,
        navigation: [
          { name: `Home`, slug: `/home` },
          { name: `Produits`, slug: `/produits` },
          { name: `Présentation`, slug: `/presentation` },
          { name: `Contact`, slug: `/contact` },
          { name: `Mentions légales`, slug: `/mentions-legales` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jodie - @lekoarts/gatsby-theme-jodie`,
        short_name: `jodie`,
        description: `Image-heavy photography portfolio with colorful accents & customizable pages. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
  ],
}
