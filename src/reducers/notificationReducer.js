const initialState = {
    notificationHistory: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SUCCESS_NOTIFICATION_HISTORY":
            return {
                ...state,
                notificationHistory: action.payload,
            };

        default:
            return state;
    }
};