import { GET_DATA } from "./actions";
import produce from 'immer';

const initialState = {
    data: [],
}

const dataReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_DATA: {

            return produce(state, draftState => {
                draftState.data = action.payload;
            });

        }

        default: {

            return state

        }
    }
}

export default dataReducer