
import { PAY } from '../action/payAction';
const INITIAL_STATE = {
    data:{
        name: '',
        img: '',
        quantity: '',
        price: '',
    },
};
const payReducer = (state = {...INITIAL_STATE}, action) => {
    switch (action.type) {
        case PAY:
            console.log("check action:",action)
            return {
                ...state, data:{
                    name: action?.payload?.name,
                    img: action?.payload?.image,
                    quantity: action?.payload?.quantity,
                    price: action?.payload?.price,
                }
            };
        default: return state;
    }
};

export default payReducer;