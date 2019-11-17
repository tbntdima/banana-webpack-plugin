class BananaWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("BananaWebpackPlugin", compilation => {
      const { assets } = compilation;
      Object.keys(assets).forEach(assetKey => {
        if (typeof assets[assetKey]._value !== "undefined") {
          assets[assetKey]._value = "🍌";
        } else {
          assets[assetKey]._source.source = () => "🍌";
        }
      });
    });
  }
}

module.exports = BananaWebpackPlugin;
