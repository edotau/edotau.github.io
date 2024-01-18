const CracoHtmlWebpackPlugin = require('craco-html-webpack-plugin');

module.exports = {
  plugins: [
    {
      plugin: CracoHtmlWebpackPlugin,
      options: {
        // See the options description below
        skipPreflightCheck: true,
        options: {
          inject: true,
          title: 'HtmlWebpackPlugin',
          hash:true,
          template:'./public/index.html'
          // ...
        },
      },
    },
  ],
};
