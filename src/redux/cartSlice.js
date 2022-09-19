import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    itemsTotalCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      )

      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }

      state.itemsTotalCount++
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload
      )

      state.itemsTotalCount -= itemToRemove.quantity
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemToRemove.id
      })
    },
    clearCart: (state) => {
      state.itemsTotalCount = 0
      state.cartItems.length = 0
    },
  },
})

export const cardReducer = cartSlice.reducer
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
