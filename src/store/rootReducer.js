import { combineReducers } from "redux";
import favoriteReducer from "./reducer/favoriteReducer";
import pageSizeReducer from "./reducer/pageSizeReducer";

const rootReducer  =combineReducers({
    pageSize : pageSizeReducer,
    favorites : favoriteReducer
})

export default rootReducer;