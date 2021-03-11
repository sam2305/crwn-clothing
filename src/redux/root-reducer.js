import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { userReducer } from './user';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { directoryReducer } from './directory';
import { shopReducer } from './shop';

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer =  combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
});

export default persistReducer(persistConfig, rootReducer);