const { createSlice } = require("@reduxjs/toolkit")

const uiSlice = createSlice({
   name: "ui",
   initialState: {
      loading: false,
   },
   reducers: {
      toggleLoading(state, action) {
         state.loading = !!action.payload
      },
   },
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer
