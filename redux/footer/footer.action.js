import footerTypes from './footer.types';

export const setFooterListMenu = (list) => ({
    type: footerTypes.SET_FOOTER_LIST_MENU,
    payload: list
});

export const setFooterCopyright = (text) => ({
    type:footerTypes.SET_FOOTER_COPYRIGHT,
    payload: text
})