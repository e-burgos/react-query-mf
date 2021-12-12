const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = (env) => {

process.env.PRODUCTION = 'on';
process.env.REACT_APP_HOST_URL= process.env.PRODUCTION === 'on' ? 'https://react-query-mf.vercel.app' : 'http://localhost:3000';
process.env.REACT_APP_LANDING_URL= process.env.PRODUCTION === 'on' ? 'https://landing-mf.vercel.app' : 'http://localhost:3001';
process.env.REACT_APP_DASHBOARD_URL= process.env.PRODUCTION === 'on' ? 'https://dashboard-mf.vercel.app' : 'http://localhost:3002';

console.log('Production: ', process.env.PRODUCTION);
console.log('Host: ' + process.env.REACT_APP_HOST_URL);
console.log('Landing-mf: ' + process.env.REACT_APP_LANDING_URL);
console.log('Dashboard-mf: ' + process.env.REACT_APP_DASHBOARD_URL);

  return {
    entry: './src/index.ts',
    output: {
      filename: 'bundle_dashboard.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: `http://localhost:3002/`,
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
      new Dotenv({
        path: `.env${env.file ? `.${env.file}` : ''}`,
        allowEmptyValues: true,
      }),
      new ModuleFederationPlugin({
        name: "dashboard_mf",
        filename: "remoteEntry.js",
        remotes: {
          host: `host@${process.env.REACT_APP_HOST_URL}/remoteEntry.js`
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
};
