import axios from "../apis/axiosConfig";
import { toast } from "react-toastify";
import { GET_NOTIFICATION_HISTORY } from "../apis/endpoints";

export const getNotificationHistory = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SHOW_LOADER' });
            const response = await axios.get(GET_NOTIFICATION_HISTORY);
            dispatch({ type: 'SUCCESS_NOTIFICATION_HISTORY', payload: response?.data });
            dispatch({ type: 'HIDE_LOADER' });
        } catch (e) {
            dispatch({ type: 'HIDE_LOADER' });
            toast.error("Something went wrong!");
        }
    };
};
