/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const wrapWithProvider = require('./wrap-with-provider')

module.exports = {
  wrapRootElement: wrapWithProvider
}