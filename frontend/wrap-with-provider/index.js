const { compose } = require('lodash/fp')

const redux = require('./redux')
const intl = require('./intl')

const wrapWithProvider = ({ element }) => compose(
  redux,
  intl
)(element)

module.exports = wrapWithProvider