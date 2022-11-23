import listpostTypes from "./listpost.types";

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

export const fetchPostStart = (filter) => ({
    type: listpostTypes.FETCH_POSTS_START,
    payload: filter
});

export const setIsLoading = (isLoading) => ({
    type: listpostTypes.SET_IS_LOADING,
    payload: isLoading
})

export const setPageNbMax = (page) => ({
    type: listpostTypes.SET_PAGE_NB_MAX,
    payload: page
})

export const setCurrentPage = (page) => ({
    type: listpostTypes.SET_CURRENT_PAGE,
    payload: page
})