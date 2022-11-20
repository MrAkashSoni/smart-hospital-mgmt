import axios from "../apis/axiosConfig";
import { USER_SIGNIN } from "../apis/endpoints";

export const userSignIn = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'REQUEST_SIGNIN' });
            const response = await axios.post(USER_SIGNIN, { ...payload });
            console.log(response)
            localStorage.setItem('token', response?.data?.token?.access);
            dispatch({ type: 'SUCCESS_SIGNIN', payload: response });
            return true;
        } catch (e) {
            dispatch({ type: 'FAILURE_SIGNIN' });
        }
    };
}