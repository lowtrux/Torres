module.exports = {
  plugins: [require("autoprefixer"), require("cssnano")],
  plugins: {
    "postcss-font-magician": {
      foundries: ["google"],
      variants: {
        "Source-Sans-Pro": {
          "200": [],
          "300": [],
          "400": [],
          "600": [],
          "700": [],
          "900": []
        }
      }
    }
  }
};
