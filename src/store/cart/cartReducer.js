import { ADD_TO_CART, SET_CART_COUNT, INCREMENT, DICREMENT, REMOVE_FROM_CART, CLEAN_CART } from "./actions";

import produce from 'immer';


const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    cartCount: JSON.parse(localStorage.getItem("cartCount")) || 0,
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_CART: {
            return produce(state, draftState => {

                const index = draftState.cart.findIndex(el => el.article === action.payload.article)
                const currentCard = { ...action.payload }

                if (index === -1) {

                    currentCard.count = 1
                    draftState.cart.push(currentCard);

                } else {

                    draftState.cart[index].count += 1;

                }

                localStorage.setItem("cart", JSON.stringify(draftState.cart));

            });
        }

        case SET_CART_COUNT: {
            return produce(state, draftState => {

                draftState.cartCount = draftState.cart.reduce((sum, current) => sum + current.count, 0);

                localStorage.setItem("cartCount", JSON.stringify(draftState.cartCount));

            })

        }

        case INCREMENT: {
            return produce(state, draftState => {
                const idx = draftState.cart.findIndex(el => el.article === action.payload)
                draftState.cart[idx].count += 1
                localStorage.setItem("cart", JSON.stringify(draftState.cart));
            })

        }

        case DICREMENT: {
            return produce(state, draftState => {

                const idx = draftState.cart.findIndex(el => el.article === action.payload)

                if (draftState.cart[idx].count > 1) {
                    draftState.cart[idx].count -= 1
                    localStorage.setItem("cart", JSON.stringify(draftState.cart));
                }

            })
        }

        case REMOVE_FROM_CART: {
            return produce(state, draftState => {

                const idx = draftState.cart.findIndex(el => el.article === action.payload)
                draftState.cart.splice(idx, 1)
                localStorage.setItem("cart", JSON.stringify(draftState.cart));

            })
        }

        case CLEAN_CART: {
            return produce(state, draftState => {
                console.log(draftState.cart);

                draftState.cart = []
                localStorage.setItem("cart", JSON.stringify(draftState.cart));

            })
        }

        default: {
            return state
        }
    }
}

export default cartReducer