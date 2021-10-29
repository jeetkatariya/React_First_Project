import { combineReducers } from "redux";
import ImageListReducers from "./ImageListReducers";

export default combineReducers({
    imageListing: ImageListReducers,
})