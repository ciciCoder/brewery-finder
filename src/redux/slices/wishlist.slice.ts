import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction'

type Wish = string

const initialState = new Set<Wish>()

const wishlistSlice = createSlice({
  name: 'wishlists',
  initialState,
  reducers: {
    addWish(state, action: PayloadAction<Wish>) {
      state.add(action.payload)
    },
    removeWish(state, action: PayloadAction<Wish>) {
      state.delete(action.payload)
    },
  },
})

export const { addWish, removeWish } = wishlistSlice.actions

export default wishlistSlice.reducer
