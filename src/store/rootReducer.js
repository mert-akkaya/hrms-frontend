import { combineReducers } from "redux";
import pageSizeReducer from "./reducer/pageSizeReducer";

const rootReducer  =combineReducers({
    pageSize : pageSizeReducer
})

export default rootReducer;