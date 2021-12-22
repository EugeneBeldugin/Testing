import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from '../redux/reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const App = () => {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  )
}

export default App

