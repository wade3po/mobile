module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        scss: {
          prependData: `@import "@/assets/css/variable.scss";`,
        },
        plugins: [
          require('postcss-px-to-viewport')({
            viewportWidth: 750,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: ['el'],
            minPixelValue: 1,
            mediaQuery: false
          }),
        ]
      }
    }
  },
}