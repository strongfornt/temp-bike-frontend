import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistStore,
    persistReducer,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist';
import { baseApi } from "./api/baseApi";
import authReducer from './features/auth/authSlice';
import storage from "redux-persist/lib/storage";
import cartReducer from './features/cart/cartSlice'
import commonReducer from './features/commonRefresh/commonSlice'
const persistConfig = {
  key: "auth",
  storage,
};
const persistCartConfig = {
  key: "cart",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);

export const store = configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      auth: persistedAuthReducer,
      cart: persistedCartReducer,
      common:commonReducer
    },
    middleware: (getDefaultMiddlewares) =>
      getDefaultMiddlewares({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);