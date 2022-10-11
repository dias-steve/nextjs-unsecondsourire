import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import headerReducer from './header/header.reducer';

//reducers
import authMaintenaceReducer from './AuthMaintenance/authMaintenance.reducer';

export const rootReducer = combineReducers({

    auth:authMaintenaceReducer,
    header: headerReducer,

});

const configStorage = {
    key: 'root',
    storage,
    blacklist: ['header'],

}

export default persistReducer(configStorage, rootReducer);