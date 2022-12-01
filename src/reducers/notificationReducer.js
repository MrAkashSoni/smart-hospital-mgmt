const initialState = {
    notificationHistory: [],
    eventCount: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SUCCESS_NOTIFICATION_HISTORY":
            return {
                ...state,
                notificationHistory: action.payload,
            };

        case "SHOW_EVENT_COUNT":
            return {
                ...state,
                eventCount: action.payload,
            }

        default:
            return state;
    }
};