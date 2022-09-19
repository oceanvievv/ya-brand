import { configureStore } from "@reduxjs/toolkit"
import { cardReducer } from "../redux/cartSlice"

export const store = configureStore({
  reducer: {
    cart: cardReducer,
  },
})
