import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './services/reducers/index';
import reducer from './services/reducers';

const rootReducer = combineReducers({
  userReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
