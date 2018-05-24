module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-cssnext'),
    require('stylelint'),
    require('cssnano'),
    require('postcss-browser-reporter')
  ]
}
