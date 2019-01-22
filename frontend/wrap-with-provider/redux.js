const React = require('react')
const { Provider } = require('react-redux')

const store = require('$src/store').default
const { initAuthorization, loadToken } = require('$src/modules/auth')
const { fetchUser } = require('$act/account')

initAuthorization()
loadToken() && store.dispatch(fetchUser())

const wrapWithProvider = element => (
  <Provider store={store}>
    {element}
  </Provider>
)

module.exports = wrapWithProvider