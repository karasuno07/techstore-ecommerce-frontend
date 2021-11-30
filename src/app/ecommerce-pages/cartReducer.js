import { createSlice } from "@reduxjs/toolkit"
import { enableMapSet } from "immer"
import CartItem from "common/class/CartItem"

enableMapSet()

const cartSlice = createSlice({
   name: "cart",
   initialState: {
      items: new Map(),
      totalQuantity: 0,
      subtotal: 0,
      taxFee: 0.1,
      shippingFee: 0,
      voucherPoint: 0,
      total: 0,
   },
   reducers: {
      saveCart(state, action) {},
      loadCart(state, action) {
         state.items = action.payload
         // TODO: iterate items to set value for other states
      },
      addItem(state, action) {
         const { product, detail, quantity } = action.payload

         const itemKey = { productId: product.id, detailId: detail.id }

         const existingItem = state.items.get(JSON.stringify(itemKey))

         if (existingItem) {
            existingItem.quantity += quantity
            existingItem.totalPrice +=
               (existingItem.detail.price - existingItem.detail.discount) * quantity
         } else {
            const cartItem = new CartItem(product, detail, quantity)
            state.items.set(JSON.stringify(itemKey), cartItem)
         }

         state.totalQuantity += quantity
         state.subtotal = [...state.items.values()].reduce(
            (totalValue, item) => (totalValue += item.totalPrice),
            0
         )
         state.shippingFee = state.subtotal > 0 ? 30000 : 0
         state.total = state.subtotal * (1 + state.taxFee) + state.shippingFee
      },
      removeItem(state, action) {
         const { itemKey, removeAll = false } = action.payload

         const existingItem = state.items.get(JSON.stringify(itemKey))

         if (removeAll) {
            state.items.delete(JSON.stringify(itemKey))
            state.totalQuantity -= existingItem.quantity
         } else if (existingItem.quantity === 1) {
            state.items.delete(JSON.stringify(itemKey))
            state.totalQuantity--
         } else {
            existingItem.quantity--
            existingItem.totalPrice -= existingItem.detail.price - existingItem.detail.discount
            state.totalQuantity--
         }

         state.subtotal = [...state.items.values()].reduce(
            (totalValue, item) => (totalValue += item.totalPrice),
            0
         )
         state.shippingFee = state.subtotal > 0 ? 30000 : 0
         state.total = state.subtotal * (1 + state.taxFee) + state.shippingFee
      },
   },
})

export const cartAction = cartSlice.actions

export default cartSlice.reducer
