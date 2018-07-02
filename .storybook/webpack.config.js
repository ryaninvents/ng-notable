const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['text-loader'],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};