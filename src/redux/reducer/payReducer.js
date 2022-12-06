import { PAY } from '../action/payAction';
const INITIAL_STATE = {
    Carts: [],
};
const payReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PAY:
            const index = state.Carts.findIndex((val, key) => val.id === action.payload.id)
            if (index < 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: action.payload.quantity,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price
                }
                state.Carts.push(cart);
            } else {
                state.Carts[index].quantity += action.payload.quantity
            }
        // console.log(state.Carts)
        default: return state;
    }
};

export default payReducer;