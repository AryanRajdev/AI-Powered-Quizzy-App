import { configureStore } from '@reduxjs/toolkit'
import commonSlice from "./features/common/commonSlice.js"
import templateSlice from "./features/template/templateSlice.js"
import assesmentSlice from "./features/assesments/assesmentSlice.js"
import { apiSlice } from './api/index.js'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    common : commonSlice,
    template : templateSlice,
    assesments : assesmentSlice
  },

   middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
})