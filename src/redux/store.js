import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import cartReducer from "./slice/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  categoryReducer,
  cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persister = persistStore(store);
