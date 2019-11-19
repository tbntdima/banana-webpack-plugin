# Banana Webpack Plugin

Plugin that turns content of output files into a single banana 🍌
Try not to use in production.

## Usage

```bash
npm i -D banana-webpack-plugin
```

Add it to webpack config -> plugins

```js
const BananaWebpackPlugin = require("banana-webpack-plugin");

module.exports = {
  plugins: [new BananaWebpackPlugin()]
};
```

## Notes

Does not transform media files like images.
