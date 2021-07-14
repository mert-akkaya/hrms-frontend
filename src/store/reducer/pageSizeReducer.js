import { SET_PAGE_SIZE } from "../actions/pageSizeActions";
import { pageSize } from "../initialValues/pageSize";

const initalState = {
    pageSize : pageSize,
};

export default function pageSizeReducer(state=initalState,{type,payload}){

    switch(type){
        case SET_PAGE_SIZE:
            
            return{
                ...state,
                pageSize : payload
            };
        default:
            return state;
    }
}