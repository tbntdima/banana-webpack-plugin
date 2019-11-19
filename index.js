class BananaWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("BananaWebpackPlugin", compilation => {
      const { assets } = compilation;
      Object.keys(assets).forEach(assetKey => {
        if (typeof assets[assetKey]._value !== "undefined") {
          assets[assetKey]._value = "🍌";
        } else if (typeof assets[assetKey].source !== "undefined") {
          assets[assetKey].source = () => "🍌";
        } else if (typeof assets[assetKey]._source.source !== "undefined") {
          assets[assetKey]._source.source = () => "🍌";
        } else {
          console.log(
            `Sorry it seems that ${assets[assetKey]} is not supported yet.`
          );
          console.log(`We welcome any contribution thought :)`);
        }
      });
    });
  }
}

module.exports = BananaWebpackPlugin;
