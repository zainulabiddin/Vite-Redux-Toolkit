import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/Counter'
import themeReducer from '../features/theme/ThemeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme:themeReducer
  },
})