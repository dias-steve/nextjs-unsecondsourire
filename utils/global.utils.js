import { setFooterCopyright, setFooterListMenu } from "../redux/footer/footer.action";
import { setIsShowMenu, setIsShowSearch } from "../redux/header/header.actions"
export const initializePage = (dispatch, generalSettingsData) => {

    const {menus, copyright_text}= generalSettingsData;
    dispatch(setIsShowMenu(false));
    dispatch(setIsShowSearch(false));
    dispatch(setFooterListMenu(menus));
    dispatch(setFooterCopyright(copyright_text));

}