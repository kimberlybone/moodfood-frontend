import { createStore } from 'redux'
import reducer from './reducers'

import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

export default createStore(rootReducers)
