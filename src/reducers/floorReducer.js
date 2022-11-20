const initialState = {
    loading: false,
    floors: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_ADD_FLOOR":
            return {
                ...state,
                loading: true,
            };

        case "SUCCESS_ADD_FLOOR":
            return {
                ...state,
                floors: [...state.floors, action.payload],
                loading: false,
            };

        case "FAILURE_ADD_FLOOR":
            return {
                ...state,
                loading: false,
            };

        case "REQUEST_GET_ALL_FLOOR":
            return {
                ...state,
                loading: true,
            };

        case "SUCCESS_GET_ALL_FLOOR":
            return {
                ...state,
                floors: action.payload,
                loading: false,
            };

        case "FAILURE_GET_ALL_FLOOR":
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};