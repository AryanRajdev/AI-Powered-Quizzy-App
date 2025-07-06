import { configureStore } from '@reduxjs/toolkit'
import commonSlice from "./features/common/commonSlice.js"

export const store = configureStore({
  reducer: {
    common : commonSlice
  },
})