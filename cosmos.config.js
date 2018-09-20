module.exports = {
  // webpackConfigPath: "node_modules/react-scripts-ts/config/webpack.config.dev"
  // watchDirs: ["src/**/*"],
  // globalImports: ["./src/cosmos/reset.js"],

  webpack(config) {
    return {
      ...config,
      resolve: {
        extensions: [".ts", ".tsx", ".css", ".svg", ".js", ".jsx"],
        modules: ["node_modules", "src"]
      },
      module: {
        rules: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          { test: /\.tsx?$/, loader: "ts-loader" },
          {
            test: /\.(jpg|jpeg|png|gif)$/,
            loader: ["file-loader"]
          }
        ]
      }
    };
  }
};
