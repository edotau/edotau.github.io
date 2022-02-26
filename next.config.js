const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')


// this simply tests the redirecting of the root path (source)
module.exports = withNextra()

const basePath = process.env.NODE_ENV === 'production' ? '/edotau.github.io' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};
