import listpostTypes from "./ListPost.types";

export const setFilter = (filterList) => ({
    type: listpostTypes.SET_FILTER,
    payload: filterList
})

export const setListPostRaw = (list) => ({
    type: listpostTypes.SET_LIST_POSTS_RAW,
    payload: list
})

export const setListPostResult = (list) => ({
    type: listpostTypes.SET_LIST_POSTS_RESULT,
    payload: list
})