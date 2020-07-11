import { combineReducers } from "redux";
import movie from "./movie";
import genre from "./genre";
import user from "./user";

const reducer = combineReducers({
    movie,
    genre,
    user
})
export default reducer;