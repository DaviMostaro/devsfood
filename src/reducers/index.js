import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import CartReducer from './CartReducer';
import OrdersReducer from './OrdersReducer';

export default combineReducers({
    user: UserReducer,
    cart: CartReducer,
    orders: OrdersReducer
});