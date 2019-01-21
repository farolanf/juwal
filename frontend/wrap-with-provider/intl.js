const React = require('react')
const { addLocaleData, IntlProvider } = require('react-intl')
const en = require('react-intl/locale-data/en')

addLocaleData(en)

const wrapWithProvider = element => (
  <IntlProvider locale={navigator.language || 'en-US'}>
    {element}
  </IntlProvider>
)

module.exports = wrapWithProvider