const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
        case SET_MY_USER:
            return {
                ...state,
                myUser: action.payload
            }
            default:
                return state;
    }
};
export default userReducer;