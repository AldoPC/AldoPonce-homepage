module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true
  },
  images: {
    loader: 'akamai',
    path: ''
  },
  basePath: '/AldoPonce-homepage',
  assetPrefix: '/AldoPonce-homepage/',
  webpack: config => {
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[contenthash].[ext]',
            publicPath: '_next/static/worker',
            outputPath: 'static/worker'
          }
        }
      ]
    })

    return config
  }
}
