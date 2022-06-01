module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/playground/unsplashapp/'
    : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.ts',
      title: 'Unsplash App',
    },
  }
}