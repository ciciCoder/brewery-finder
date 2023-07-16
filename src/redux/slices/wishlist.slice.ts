import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction'

type Wish = string

function getInitialState() {
  const result = localStorage.getItem('wishlist')
  if (!result) return []
  const wishlist = JSON.parse(result) as Wish[]
  if (!Array.isArray(wishlist))
    throw new Error(`${typeof wishlist} is incomaptible with type Wish[]`)
  return wishlist
}

const setLocalWishlist = (() => {
  let timeout: NodeJS.Timeout
  return function (wishlist: Wish[]) {
    clearTimeout(timeout)
    timeout = setTimeout(
      () => localStorage.setItem('wishlist', JSON.stringify(wishlist)),
      100,
    )
  }
})()

const wishlistSlice = createSlice({
  name: 'wishlists',
  initialState: getInitialState(),
  reducers: {
    addWish(state, action: PayloadAction<Wish>) {
      state.push(action.payload)
      setLocalWishlist([...state])
    },
    removeWish(state, action: PayloadAction<Wish>) {
      const newState = state.filter((item) => item !== action.payload)
      setLocalWishlist([...newState])
      return newState
    },
    setWishlist(state, action: PayloadAction<Wish[]>) {
      const newState = [...action.payload]
      setLocalWishlist(newState)
      return newState
    },
  },
})

export const { addWish, removeWish, setWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer
