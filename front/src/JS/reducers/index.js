import {combineReducers} from "redux"
import userReducer from './userReducer'
import filmReducer from './filmReducer'

const rootReducer = combineReducers({userReducer,filmReducer})

export default rootReducer