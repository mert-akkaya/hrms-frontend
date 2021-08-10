export const SET_FAVORITE = "SET_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export function addToFavorite(jobAdvertisement){

    return{
        type:SET_FAVORITE,
        payload:jobAdvertisement
    }
}

export function removeToFavorite(jobAdvertisement){
    return {
        type:REMOVE_FAVORITE,
        payload:jobAdvertisement
    }
}