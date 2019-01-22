/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require('dotenv').config({
  path: '.env'
})

const path = require('path')

module.exports = {
  onCreateWebpackConfig: ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '$prj': path.resolve(__dirname),
          '$src': path.resolve(__dirname, 'src'),
          '$comp': path.resolve(__dirname, 'src/components'),
          '$con': path.resolve(__dirname, 'src/containers'),
          '$act': path.resolve(__dirname, 'src/actions'),
        }
      }
    })
  }
}