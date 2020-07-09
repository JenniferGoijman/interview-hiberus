const movieReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_MOVIES':
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state;
    }
};
export default movieReducer;