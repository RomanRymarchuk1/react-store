import { ADD_TO_FAVORITE } from "./actions";

import produce from 'immer';


const initialState = {
    favorite: JSON.parse(localStorage.getItem("favorite")) || [],
    isFavorite: false,
}

const favoriteReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_FAVORITE: {

            return produce(state, draftState => {

                const article = action.payload

                if (draftState.favorite.includes(article)) {

                    const index = draftState.favorite.indexOf(article);
                    draftState.favorite.splice(index, 1);

                } else {

                    draftState.favorite.push(article);

                }

                draftState.isFavorite = !draftState.isFavorite
                localStorage.setItem('favorite', JSON.stringify(draftState.favorite));
            })

        }

        default: {

            return state

        }
    }
}

export default favoriteReducer