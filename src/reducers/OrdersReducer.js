const initialState = {
  orders: []
};

const OrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    case 'REMOVE_ORDER':
      return {
        ...state,
        orders: state.orders.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
};

export default OrdersReducer;
