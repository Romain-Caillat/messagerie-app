import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import RootReducer from './reducers'


const persistConfig = {
  key: 'root',
  storage: localStorage
}

const state = {authenticated: false};
 
const persistedReducer = persistReducer(persistConfig, RootReducer);
 
const store = createStore(persistedReducer, state);
 
const persistor = persistStore(store);

export { store, persistor };