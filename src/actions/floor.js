import axios from "../apis/axiosConfig";
import { ADD_FLOOR, GET_ALL_FLOOR } from "../apis/endpoints";

export const addFloor = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'REQUEST_ADD_FLOOR' });
            const response = await axios.post(ADD_FLOOR, { ...payload });
            dispatch({ type: 'SUCCESS_ADD_FLOOR', payload: response?.data });
        } catch (e) {
            dispatch({ type: 'FAILURE_ADD_FLOOR' });
        }
    };
}

export const getAllFloor = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'REQUEST_GET_ALL_FLOOR' });
            const response = await axios.get(GET_ALL_FLOOR);
            dispatch({ type: 'SUCCESS_GET_ALL_FLOOR', payload: response?.data });
        } catch (e) {
            dispatch({ type: 'FAILURE_GET_ALL_FLOOR' });
        }
    };
}