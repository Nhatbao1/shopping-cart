
import { PAY } from '../action/payAction';
const INITIAL_STATE = {
    cart:[],
    count:0,
};
const payReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PAY:
            console.log("check state:",state)
            if(state.count === 0){

            }
            
        default: return state;
    }
};

export default payReducer;