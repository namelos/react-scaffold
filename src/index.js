import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { Provider } from 'react-redux'

import reducer from './modules'

const store = compose(
  applyMiddleware(thunk, logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer)

render(
  <Provider store={store}>
    <div>test</div>
  </Provider>,
  document.getElementById('root')
)