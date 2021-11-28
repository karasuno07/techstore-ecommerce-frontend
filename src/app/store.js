import { configureStore } from "@reduxjs/toolkit"

import productFilterSlice from "./ecommerce-pages/productFilterSlice"
import cartSlice from "./ecommerce-pages/cartSlice"

export const store = configureStore({
   reducer: { productFilter: productFilterSlice.reducer, cart: cartSlice.reducer },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})
