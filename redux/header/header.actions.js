import headerTypes from "./header.types"
export const setIsShowMenu =  (isShow) => ({
    type: headerTypes.SET_IS_SHOW_MENU,
    payload: isShow
})

export const setIsShowSearch = (isShow) => ({
    type: headerTypes.SET_IS_SHOW_SEARCH,
    payload: isShow
})