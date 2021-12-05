const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "http://localhost:3000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
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
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        landing_mf: "landing_mf@http://localhost:3001/remoteEntry.js",
        dashboard_mf: "dashboard_mf@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        "./FooterSmall": "./src/components/Footers/FooterSmall.tsx",
        "./IndexNavbar": "./src/components/Navbars/IndexNavbar.tsx",
        "./IndexDropdown": "./src/components/Dropdowns/IndexDropdown.tsx",
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
