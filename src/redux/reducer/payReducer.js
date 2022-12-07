import { PAY } from '../action/payAction';
const INITIAL_STATE = {
<<<<<<< HEAD
    cart:[],
    count:0,
=======
    Carts: [],
>>>>>>> 8deb42f9aa4d71b90e17e060850b190d8ab3a38a
};
const payReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PAY:
<<<<<<< HEAD
            console.log("check state:",state)
            if(state.count === 0){

            }
            
=======
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
>>>>>>> 8deb42f9aa4d71b90e17e060850b190d8ab3a38a
        default: return state;
    }
};

export default payReducer;