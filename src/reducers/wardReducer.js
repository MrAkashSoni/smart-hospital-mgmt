const initialState = {
    wards: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SUCCESS_ADD_WARD":
            return {
                ...state,
                wards: [...state.wards, action.payload],
            };

        case "SUCCESS_GET_ALL_WARD":
            return {
                ...state,
                wards: action.payload,
            };

        case "SUCCESS_EDIT_WARD":
            return {
                ...state,
                wards: [...state.wards, state.wards[action.payload.index] = action.payload],
            };

        case "SUCCESS_DELETE_WARD":
            const arr = state.wards;
            arr.splice(action.payload, 1);

            return {
                ...state,
                wards: arr,
            };

        default:
            return state;
    }
};