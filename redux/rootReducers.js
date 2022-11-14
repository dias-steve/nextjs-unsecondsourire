import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import headerReducer from './header/header.reducer';
import listpostReducer from './ListPost/listpost.reducer';

//reducers
import authMaintenaceReducer from './AuthMaintenance/authMaintenance.reducer';

export const rootReducer = combineReducers({

    auth:authMaintenaceReducer,
    header: headerReducer,
    postlist: listpostReducer

});

const configStorage = {
    key: 'root',
    storage,
    blacklist: ['header', 'postlist'],

}

export default persistReducer(configStorage, rootReducer);