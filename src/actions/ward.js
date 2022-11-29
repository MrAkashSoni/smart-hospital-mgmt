import { toast } from "react-toastify";
import axios from "../apis/axiosConfig";
import { ACCESS_SINGLE_WARD, ADD_WARD, GET_ALL_WARD } from "../apis/endpoints";

export const addWard = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SHOW_LOADER' });
            const response = await axios.post(ADD_WARD, { ...payload });
            dispatch({ type: 'SUCCESS_ADD_WARD', payload: response?.data });
            toast.success("Ward added!");
            dispatch({ type: 'HIDE_LOADER' });
        } catch (e) {
            dispatch({ type: 'HIDE_LOADER' });
            toast.error("Something went wrong!");
        }
    };
}

export const getAllWard = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SHOW_LOADER' });
            const response = await axios.get(GET_ALL_WARD);
            dispatch({ type: 'SUCCESS_GET_ALL_WARD', payload: response?.data });
            dispatch({ type: 'HIDE_LOADER' });
        } catch (e) {
            dispatch({ type: 'HIDE_LOADER' });
            toast.error("Something went wrong!");
        }
    };
}

export const editWard = (index, payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SHOW_LOADER' });
            const response = await axios.put(ACCESS_SINGLE_WARD.replace("{{id}}", payload.id), { ...payload })
            dispatch({ type: 'SUCCESS_EDIT_WARD', payload: { index, ...response?.data } });
            toast.success("Ward updated!");
            dispatch({ type: 'HIDE_LOADER' });
        } catch (e) {
            dispatch({ type: 'HIDE_LOADER' });
            toast.error("Something went wrong!");
        }
    };
}

export const deleteWard = (id, index) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SHOW_LOADER' });
            const response = await axios.delete(ACCESS_SINGLE_WARD.replace("{{id}}", id))
            dispatch({ type: 'SUCCESS_DELETE_WARD', payload: index });
            toast.success("Ward deleted!");
            dispatch({ type: 'HIDE_LOADER' });
        } catch (e) {
            dispatch({ type: 'HIDE_LOADER' });
            toast.error("Something went wrong!");
        }
    };
};
