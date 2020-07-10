import { combineReducers } from "redux";
import movie from "./movie";
import genre from "./genre";

const reducer = combineReducers({
    movie,
    genre
})
export default reducer;