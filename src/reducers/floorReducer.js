const initialState = {
    floors: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SUCCESS_ADD_FLOOR":
            return {
                ...state,
                floors: [...state.floors, action.payload],
            };

        case "SUCCESS_GET_ALL_FLOOR":
            return {
                ...state,
                floors: action.payload,
            };

        case "SUCCESS_DELETE_FLOOR":
            const arr = state.floors;
            arr.splice(action.payload, 1);

            return {
                ...state,
                floors: arr,
            };


        default:
            return state;
    }
};