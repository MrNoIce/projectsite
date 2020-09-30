module.exports = {
  siteMetadata: {
    title: `Jake Scott`,
    description: `My site to represent projects I develop with software`,
    author: `Jake Scott`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
        src: `${__dirname}/static/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jake-Murphy-Scott`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/data/images/profile-image.JPG`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
