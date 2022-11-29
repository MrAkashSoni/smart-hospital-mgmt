import { toast } from "react-toastify";
import axios from "../apis/axiosConfig";
import { ACCESS_SINGLE_FLOOR, ADD_FLOOR, GET_ALL_FLOOR } from "../apis/endpoints";

export const addFloor = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SHOW_LOADER' });
            const response = await axios.post(ADD_FLOOR, { ...payload });
            dispatch({ type: 'SUCCESS_ADD_FLOOR', payload: response?.data });
            dispatch({ type: 'HIDE_LOADER' });
            toast.success("Floor added!");
        } catch (e) {
            dispatch({ type: 'HIDE_LOADER' });
            toast.error("Something went wrong!");
        }
    };
}

export const getAllFloor = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SHOW_LOADER' });
            const response = await axios.get(GET_ALL_FLOOR);
            dispatch({ type: 'SUCCESS_GET_ALL_FLOOR', payload: response?.data });
            dispatch({ type: 'HIDE_LOADER' });
        } catch (e) {
            dispatch({ type: 'HIDE_LOADER' });
            toast.error("Something went wrong!");
        }
    };
};

export const deleteFloor = (id, index) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SHOW_LOADER' });
            const response = await axios.delete(ACCESS_SINGLE_FLOOR.replace("{{id}}", id))
            dispatch({ type: 'SUCCESS_DELETE_FLOOR', payload: index });
            toast.success("Floor deleted!");
            dispatch({ type: 'HIDE_LOADER' });
        } catch (e) {
            dispatch({ type: 'HIDE_LOADER' });
            toast.error("Something went wrong!");
        }
    };
};
