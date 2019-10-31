import { createStore } from 'redux'
import userReducer from './reducers'

import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  user: userReducer
})

export default createStore(reducer, applyMiddleware(thunk))
// thunk makes dispatches asynchronous
