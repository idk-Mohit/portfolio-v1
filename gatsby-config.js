module.exports = {
  siteMetadata: {
    title: `idk-mohit`,
    description: `Hello, My name is Mohit. I’m a Web Developer specializing in building fast, attractive digital experiences. Currently, I’m focused on building Personal and freelance projects. And Available for opportunities.`,
    siteUrl: `https://idk-mohit.vercel.app`,
    image: "favicon-32x32.png",
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        start_url: "/",
      },
    },
    "gatsby-plugin-mdx",
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
