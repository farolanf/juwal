const React = require('react')
const PropTypes = require('prop-types')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware } = require('redux')
const reduxThunk = require('redux-thunk').default

const reducers = require('./src/reducers').default

const store = createStore(
  reducers,
  applyMiddleware(reduxThunk)
)

const wrapWithProvider = ({ element }) => (
  <Provider store={store}>
    {element}
  </Provider>
)

wrapWithProvider.propTypes = {
  element: PropTypes.element.isRequired
}

module.exports = wrapWithProvider