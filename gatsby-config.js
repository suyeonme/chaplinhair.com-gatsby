module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Poppins',
            variants: [`200`, `400`, `600`],
          },
          {
            family: `Playfair Display`,
            variants: [`500, 900`],
          },
        ],
      },
    },
  ],
};
