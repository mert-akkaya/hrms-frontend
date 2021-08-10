import { REMOVE_FAVORITE, SET_FAVORITE } from "../actions/favoriteActions";
import { favoriteItems } from "../initialValues/favorites";


const initialState = {
    favoriteItems : favoriteItems
}

export default function favoriteReducer(state=initialState,{type,payload}){

    switch (type) {
        case SET_FAVORITE :
            return {
                ...state,
                favoriteItems : [...state.favoriteItems,payload],
                
            }
        case REMOVE_FAVORITE:
            return{
                ...state,
                favoriteItems : state.favoriteItems.filter((f)=>f.id !== payload.id)
                
            }
        default:
            return state;
    }
}