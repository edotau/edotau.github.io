const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')


// this simply tests the redirecting of the root path (source)

const isProd = process.env.NODE_ENV === "production"

module.exports = withNextra(),

{
  assetPrefix: isProd ? "/edotau.github.io/" : "",
}