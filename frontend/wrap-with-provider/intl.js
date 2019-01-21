const React = require('react')
const { connect } = require('react-redux')
const { addLocaleData, IntlProvider } = require('react-intl')
const en = require('react-intl/locale-data/en')

addLocaleData(en)

const mapStateToProps = state => ({
  locale: state.app.locale
})

const ProviderWrapper = connect(mapStateToProps)(
  ({ locale, children }) => (
    <IntlProvider locale={locale}>
      {children}
    </IntlProvider>
  )
)

const wrapWithProvider = element => (
  <ProviderWrapper>
    {element}
  </ProviderWrapper>
)

module.exports = wrapWithProvider