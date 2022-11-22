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

        case "REQUEST_EDIT_WARD":
            return {
                ...state,
                loading: true,
            };

        case "SUCCESS_EDIT_WARD":
            return {
                ...state,
                wards: [...state.wards, state.wards[action.payload.index] = action.payload],
                loading: false,
            };

        case "FAILURE_EDIT_WARD":
            return {
                ...state,
                loading: false,
            };


        case "REQUEST_DELETE_WARD":
            return {
                ...state,
                loading: true,
            };

        case "SUCCESS_DELETE_WARD":
            return {
                ...state,
                wards: state.wards.splice(action.payload, 1),
                loading: false,
            };

        case "FAILURE_DELETE_WARD":
            return {
                ...state,
                loading: false,
            };


        default:
            return state;
    }
};