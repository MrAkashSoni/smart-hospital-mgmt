const initialState = {
    beds: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SUCCESS_ADD_BED":
            return {
                ...state,
                beds: [...state.beds, action.payload],
            };

        case "SUCCESS_GET_ALL_BED":
            return {
                ...state,
                beds: action.payload,
            };

        case "SUCCESS_DELETE_BED":
            const arr = state.beds;
            arr.splice(action.payload, 1);

            return {
                ...state,
                beds: arr,
            };

        default:
            return state;
    }
};