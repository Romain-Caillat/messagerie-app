import { combineReducers } from 'redux'
import listuserReducer from './Userslice'

const rootReducer = combineReducers({
  listuser: listuserReducer,
});

export default rootReducer