import { GET_DATA } from "./actions"
import axios from 'axios'

export const getDataAC = () => async (dispatch) => {

    try {

        const { data } = await axios.get('https://romanrymarchuk1.github.io/react-store/data.json');
        dispatch({ type: GET_DATA, payload: data, })

    } catch (err) {

        // try {

        //     const { data } = await axios.get('https://romanrymarchuk1.github.io/react-store/data.json');
        //     dispatch({ type: GET_DATA, payload: data, })

        // } catch (error) {

        //     console.log(error);

        // }

        console.log(err);

    }

} 