const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle_dashboard.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3002,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        type: "javascript/auto",
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        use: ["style-loader", "css-loader", "postcss-loader"],
        test: /\.(css|s[ac]ss)$/i,
      },
      {
        use:  "babel-loader",
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        type: 'asset',
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard_mf",
      filename: "remoteEntry.js",
      remotes: {
        host: "host@http://localhost:3000/remoteEntry.js"
      },
      exposes: {
        "./Dashboard": "./src/views/Dashboard.tsx",
        "./Tables": "./src/views/Tables.tsx",
        "./OtherPages": "./src/views/OtherPages.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};
