import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

//reducers
import authMaintenaceReducer from './AuthMaintenance/authMaintenance.reducer';

export const rootReducer = combineReducers({

    auth:authMaintenaceReducer,

});

const configStorage = {
    key: 'root',
    storage,
    blacklist: [],

}

export default persistReducer(configStorage, rootReducer);