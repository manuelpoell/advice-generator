const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
