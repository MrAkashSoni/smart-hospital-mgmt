const initialState = {
    loading: false,
    beds: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_ADD_BED":
            return {
                ...state,
                loading: true,
            };

        case "SUCCESS_ADD_BED":
            return {
                ...state,
                beds: [...state.beds, action.payload],
                loading: false,
            };

        case "FAILURE_ADD_BED":
            return {
                ...state,
                loading: false,
            };

        case "REQUEST_GET_ALL_BED":
            return {
                ...state,
                loading: true,
            };

        case "SUCCESS_GET_ALL_BED":
            return {
                ...state,
                beds: action.payload,
                loading: false,
            };

        case "FAILURE_GET_ALL_BED":
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};