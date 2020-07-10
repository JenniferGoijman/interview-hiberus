const genreReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_GENRES':
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state;
    }
};
export default genreReducer;