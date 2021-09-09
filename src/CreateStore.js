import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import RootReducer from './reducers'


const persistConfig = {
  key: 'root',
  storage: localStorage
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware
)

const persistor = persistStore(store)

export default { store, persistor }
