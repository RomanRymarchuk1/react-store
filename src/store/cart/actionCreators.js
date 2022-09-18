import { ADD_TO_CART, SET_CART_COUNT, INCREMENT, DICREMENT, REMOVE_FROM_CART, CLEAN_CART } from "./actions"

export const addToCartAC = (payload) => ({ type: ADD_TO_CART, payload })
export const setCartCountAC = () => ({ type: SET_CART_COUNT })
export const incrementAC = (payload) => ({ type: INCREMENT, payload })
export const dicrementAC = (payload) => ({ type: DICREMENT, payload })
export const removeFromCartAC = (payload) => ({ type: REMOVE_FROM_CART, payload })
export const cleanCartAC = () => ({ type: CLEAN_CART })




