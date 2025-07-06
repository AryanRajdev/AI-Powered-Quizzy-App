import { configureStore } from '@reduxjs/toolkit'
import commonSlice from "./features/common/commonSlice.js"
import templateSlice from "./features/template/templateSlice.js"

export const store = configureStore({
  reducer: {
    common : commonSlice,
    template : templateSlice
  },
})