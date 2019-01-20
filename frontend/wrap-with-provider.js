const React = require('react')
const PropTypes = require('prop-types')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const reduxThunk = require('redux-thunk').default

const reducers = require('./src/reducers').default

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(reduxThunk)
  )
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