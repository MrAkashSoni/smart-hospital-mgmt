import axios from "../apis/axiosConfig";
import { ADD_WARD, GET_ALL_WARD } from "../apis/endpoints";

export const addWard = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'REQUEST_ADD_WARD' });
            const response = await axios.post(ADD_WARD, { ...payload });
            dispatch({ type: 'SUCCESS_ADD_WARD', payload: response?.data });
        } catch (e) {
            dispatch({ type: 'FAILURE_ADD_WARD' });
        }
    };
}

export const getAllWard = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'REQUEST_GET_ALL_WARD' });
            const response = await axios.get(GET_ALL_WARD);
            dispatch({ type: 'SUCCESS_GET_ALL_WARD', payload: response?.data });
        } catch (e) {
            dispatch({ type: 'FAILURE_GET_ALL_WARD' });
        }
    };
}