import { toast } from "react-toastify";
import axios from "../apis/axiosConfig";
import { ACCESS_SINGLE_BED, ADD_BED, GET_ALL_BED } from "../apis/endpoints";

export const addBed = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SHOW_LOADER' });
            const response = await axios.post(ADD_BED, { ...payload });
            dispatch({ type: 'SUCCESS_ADD_BED', payload: response?.data });
            dispatch({ type: 'HIDE_LOADER' });
            toast.success("Bed added!");
        } catch (e) {
            dispatch({ type: 'HIDE_LOADER' });
            toast.error("Something went wrong!");
        }
    };
}

export const getAllBed = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SHOW_LOADER' });
            const response = await axios.get(GET_ALL_BED);
            dispatch({ type: 'SUCCESS_GET_ALL_BED', payload: response?.data });
            dispatch({ type: 'HIDE_LOADER' });
        } catch (e) {
            dispatch({ type: 'HIDE_LOADER' });
            toast.error("Something went wrong!");
        }
    };
};

export const deleteBed = (id, index) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SHOW_LOADER' });
            const response = await axios.delete(ACCESS_SINGLE_BED.replace("{{id}}", id))
            dispatch({ type: 'SUCCESS_DELETE_BEDR', payload: index });
            toast.success("Bed deleted!");
            dispatch({ type: 'HIDE_LOADER' });
        } catch (e) {
            dispatch({ type: 'HIDE_LOADER' });
            toast.error("Something went wrong!");
        }
    };
};
