import { toast } from "react-toastify";
import axios from "../apis/axiosConfig";
import { USER_SIGNIN } from "../apis/endpoints";

export const userSignIn = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SHOW_LOADER' });
            const response = await axios.post(USER_SIGNIN, { ...payload });
            localStorage.setItem('token', response?.data?.token?.access);
            dispatch({ type: 'SUCCESS_SIGNIN', payload: response });
            dispatch({ type: 'HIDE_LOADER' });
            toast.success("Signed in succesfully!");
            return true;
        } catch (e) {
            dispatch({ type: 'HIDE_LOADER' });
            toast.error("Something went wrong!");
        }
    };
}