const initialState = {
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SUCCESS_SIGNIN":
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
};