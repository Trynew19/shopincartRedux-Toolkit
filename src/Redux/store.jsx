import { configureStore } from '@reduxjs/toolkit'

import CartSlice from './Reducers/CartSlice'

export const store = configureStore({
  reducer: {
    cart:CartSlice
  },

})