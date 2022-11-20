import axios from "../apis/axiosConfig";
import { ADD_BED, GET_ALL_BED } from "../apis/endpoints";

export const addBed = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'REQUEST_ADD_BED' });
            const response = await axios.post(ADD_BED, { ...payload });
            dispatch({ type: 'SUCCESS_ADD_BED', payload: response?.data });
        } catch (e) {
            dispatch({ type: 'FAILURE_ADD_BED' });
        }
    };
}

export const getAllBed = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'REQUEST_GET_ALL_BED' });
            const response = await axios.get(GET_ALL_BED);
            dispatch({ type: 'SUCCESS_GET_ALL_BED', payload: response?.data });
        } catch (e) {
            dispatch({ type: 'FAILURE_GET_ALL_BED' });
        }
    };
}