module.exports = {
  flags: {
    FAST_DEV: true
  },
  siteMetadata: {
    title: "gatsby-preview-test",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "O-yrYs8rsuih_qbVo8XSxleuR7-JDB26Jl0er-M91Eo",
        spaceId: "uahr2m12hn5b",
        host: `preview.contentful.com`,
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        outputPath: `src/__generated__/gatsby-types.d.ts`,
        emitSchema: {
          "src/__generated__/gatsby-schema.graphql": true,
        },
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-layout'
  ],
};
