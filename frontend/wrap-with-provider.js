const React = require('react')
const PropTypes = require('prop-types')
const { Provider } = require('react-redux')
const { createStore } = require('redux')

const reducers = require('./src/reducers').default

const store = createStore(reducers)

const wrapWithProvider = ({ element }) => (
  <Provider store={store}>
    {element}
  </Provider>
)

wrapWithProvider.propTypes = {
  element: PropTypes.element.isRequired
}

module.exports = wrapWithProvider