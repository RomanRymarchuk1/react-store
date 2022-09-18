import { SET_IS_MODAL_ACTIVE, ADD_MODAL_PROPS } from "./actions";

import produce from 'immer';


const initialState = {
    modalProps: {},
    isModalActive: false,
}

const modalReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_IS_MODAL_ACTIVE: {

            return produce(state, draftState => {
                draftState.isModalActive = action.payload
            })

        }
        case ADD_MODAL_PROPS: {

            return produce(state, draftState => {
                draftState.modalProps = action.payload
            })

        }

        default: {

            return state

        }
    }
}

export default modalReducer