import { setIsShowMenu, setIsShowSearch } from "../redux/header/header.actions"
export const initializePage = (dispatch) => {
    dispatch(setIsShowMenu(false));
    dispatch(setIsShowSearch(false));
}