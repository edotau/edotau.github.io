const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')


// this simply tests the redirecting of the root path (source)
module.exports = {
	async redirects() {
		withNextra()
		return [
			{
				source: '/',
				destination: 'https://edotau.github.io/',
				permanent: false,
				basePath: false
			},
		]
	},
};
