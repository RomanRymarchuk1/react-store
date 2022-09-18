import { SET_IS_FORM_MODAL_ACTIVE } from "./actions";

import produce from 'immer';


const initialState = {
    isModalActive: false,
}

const formModalReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_IS_FORM_MODAL_ACTIVE: {

            return produce(state, draftState => {
                draftState.isModalActive = action.payload
            })

        }

        default: {

            return state

        }
    }
}

export default formModalReducer