import axios from "../apis/axiosConfig";
import { ACCESS_SINGLE_WARD, ADD_WARD, GET_ALL_WARD } from "../apis/endpoints";

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

export const editWard = (index, payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'REQUEST_EDIT_WARD' });
            const response = await axios.put(ACCESS_SINGLE_WARD.replace("{{id}}", payload.id), { ...payload })
            dispatch({ type: 'SUCCESS_EDIT_WARD', payload: { index, ...response?.data } });
        } catch (e) {
            dispatch({ type: 'FAILURE_EDIT_WARD' });
        }
    };
}

export const deleteWard = (id, index) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'REQUEST_DELETE_WARD' });
            const response = await axios.delete(ACCESS_SINGLE_WARD.replace("{{id}}", id))
            dispatch({ type: 'SUCCESS_DELETE_WARD', payload: index });
        } catch (e) {
            dispatch({ type: 'FAILURE_DELETE_WARD' });
        }
    };
}