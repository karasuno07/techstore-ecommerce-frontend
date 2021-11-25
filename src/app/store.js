import { configureStore } from "@reduxjs/toolkit"

import productFilterSlice from "./ecommerce-pages/productFilterSlice"

export const store = configureStore({
   reducer: { productFilter: productFilterSlice.reducer },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})
