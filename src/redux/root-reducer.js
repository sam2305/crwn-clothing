import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { userReducer } from './user';

export default combineReducers({
    user:userReducer,
    cart:cartReducer
});