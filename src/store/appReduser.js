import { combineReducers } from "redux"

import dataReducer from "./data/dataReducer"
import cartReducer from "./cart/cartReducer"
import favoriteReducer from "./favorite/favoriteReducer"
import modalReducer from "./modal/modalReducer"
import formModalReducer from "./formModal/formModalReducer"


const appReducer = combineReducers({
    data: dataReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
    modal: modalReducer,
    formModal: formModalReducer
})

export default appReducer