import { createStore, applyMiddleware, combineReducers } from 'redux'
import userReducer from './userReducer'
import errorReducer from './errorReducer'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
// import createHistory from 'history/createBrowserHistory'
// import { routerMiddleware } from 'react-router-redux'

// export const history = createHistory()


const reducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  errors: errorReducer
})

export default createStore(reducer, applyMiddleware(thunk))
// thunk makes dispatches asynchronous
