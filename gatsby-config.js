module.exports = {
  siteMetadata: {
    // ... suas configurações de metadados aqui ...
  },
  plugins: [
    // ... outros plugins ...

    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        develop: false,
        purgeOnly: [""],
        ignore: ["swiper/"],
      },
    },

    // ... outros plugins ...
  ],
};
