import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from "./slices/theme"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistThemeConfig = {
  key: 'theme',
  storage,
  whitelist: ['themeMode']
};

const persistThemeReducer = persistReducer(
  persistThemeConfig,
  themeSlice.reducer
)

const store = configureStore({
  reducer: {
    theme: persistThemeReducer
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store);
export default store;