import { combineReducers } from 'redux'

import list from './list'
import remove from './remove'
import update from './update'
import create from './create'

let reducer = combineReducers({})

reducer = combineReducers({
    list, remove, update, create
});

export default reducer;