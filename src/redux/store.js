import { createStore, applyMiddleware, combineReducers } from 'redux'
import userReducer from './userReducer'

import thunk from 'redux-thunk'


const reducer = combineReducers({
  user: userReducer
})

export default createStore(reducer, applyMiddleware(thunk))
// thunk makes dispatches asynchronous
