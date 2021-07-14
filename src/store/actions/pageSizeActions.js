export const SET_PAGE_SIZE = "SET_PAGE_SIZE";

export function setPageSizeAction(pageSize){
    return {
        type: SET_PAGE_SIZE,
        payload:pageSize
    }
}