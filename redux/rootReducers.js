import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import headerReducer from './header/header.reducer';
import listpostReducer from './ListPost/listpost.reducer';
import footerReducer from './footer/footer.reducer';
import RGPDReducer from '../features/PopupRGPD/redux/RGPD.reducer';

//reducers
import authMaintenaceReducer from './AuthMaintenance/authMaintenance.reducer';

export const rootReducer = combineReducers({

    auth:authMaintenaceReducer,
    header: headerReducer,
    postlist: listpostReducer,
    footer: footerReducer,
    rgpd: RGPDReducer

});

const configStorage = {
    key: 'root',
    storage,
    blacklist: ['header', 'postlist', 'footer'],

}

export default persistReducer(configStorage, rootReducer);