import { combineReducers } from "redux";
import movie from "./movie";

const reducer = combineReducers({
    movie
    // With the idea to make the project easily scalable, you can add the rest of the reducers here.
})
export default reducer;