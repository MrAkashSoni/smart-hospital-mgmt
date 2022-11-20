const initialState = {
    loading: false,
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_SIGNIN":
            return {
                ...state,
                loading: true,
            };

        case "SUCCESS_SIGNIN":
            return {
                ...state,
                user: action.payload,
                loading: false,
            };

        case "FAILURE_SIGNIN":
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};