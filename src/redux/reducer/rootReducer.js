import { combineReducers } from 'redux';
import payReducer from './payReducer';
const rootReducer = combineReducers({
    pay:payReducer,
});

export default rootReducer;