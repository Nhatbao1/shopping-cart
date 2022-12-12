
import { PAY, DELETE,ALL } from '../action/payAction';
const INITIAL_STATE = {
    carts: [],
    count: 0,
};
const payReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PAY:
            const index = state.carts.findIndex((val, key) => val.id === action.payload.id);
            if (index < 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: action.payload.quantity,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price
                }
                state.carts.push(cart);
                state.count = cart
            } else {
                state.carts[index].quantity += +action.payload.quantity;
            }
            return {
                ...state, count: state.carts.length,
            }
        case DELETE:
            state.carts=state.carts.filter((val, key) => val.id !== action.payload.id)
            return {
                ...state, count: state.carts.length,
            }
        case ALL:
            state.carts=[]
            return{
                ...state, count: state.carts.length,
            }
        default: return state;
    }
};

export default payReducer;