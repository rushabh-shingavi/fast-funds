import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage/session";
import { configureStore } from "@reduxjs/toolkit";


const rootPersistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["auth"],
  //  blacklist: ['','']
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persister = persistStore(store);

export { store, persister };
