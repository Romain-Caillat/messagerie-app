import { combineReducers } from 'redux'
import listuserReducer from './Userslice'
import chatReducer from './Chatslice'

const rootReducer = combineReducers({
  listuser: listuserReducer,
  listmessage: chatReducer,
});

export default rootReducer