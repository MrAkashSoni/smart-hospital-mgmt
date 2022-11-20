const initialState = {
    loading: false,
    wards: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_ADD_WARD":
            return {
                ...state,
                loading: true,
            };

        case "SUCCESS_ADD_WARD":
            return {
                ...state,
                wards: [...state.wards, action.payload],
                loading: false,
            };

        case "FAILURE_ADD_WARD":
            return {
                ...state,
                loading: false,
            };

        case "REQUEST_GET_ALL_WARD":
            return {
                ...state,
                loading: true,
            };

        case "SUCCESS_GET_ALL_WARD":
            return {
                ...state,
                wards: action.payload,
                loading: false,
            };

        case "FAILURE_GET_ALL_WARD":
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};