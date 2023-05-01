const path = require("path");

module.exports = {
  mode: "production",
  //fixed bug that i removed ./
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};

