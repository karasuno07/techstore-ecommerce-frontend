import { configureStore } from "@reduxjs/toolkit"

import uiReducer from "./uiReducer"
import productFilterReducer from "./ecommerce-pages/productFilterReducer"
import cartReducer from "./ecommerce-pages/cartReducer"

export const store = configureStore({
   reducer: { ui: uiReducer, productFilter: productFilterReducer, cart: cartReducer },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})
