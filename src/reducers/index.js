import {combineReducers} from 'redux'
import { textReducer } from './textReducer'

export default combineReducers({
    info: textReducer
})