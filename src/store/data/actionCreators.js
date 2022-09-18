import { GET_DATA } from "./actions"
import axios from 'axios'

export const getDataAC = () => async (dispatch) => {

    try {

        const { data } = await axios.get('../../data.json');
        dispatch({ type: GET_DATA, payload: data, })

    } catch (err) {

        console.warn(err);

    }

} 