import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { initStateWithPrevTab } from "redux-state-sync";
import config from "../config/app.config";
import logger from "../utils/logger";
import { chatUserReducer, profileDataReducer } from ".";

const RootReducer = combineReducers({
  chat: chatUserReducer, // <-- Use the reducer directly
  profileData: profileDataReducer
});

const encryptor = encryptTransform({
  secretKey: `${config.NAME_KEY}-storage`,
  onError: (error) => {
    // Handle the error.
    logger({ error });
  },
});

const persistConfig = {
  key: config.NAME_KEY,
  storage,
  whitelist: ["chat", "profileData"],
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: config.NODE_ENV !== "production",
});

initStateWithPrevTab(store);

export default store;

export const Persistor = persistStore(store);
