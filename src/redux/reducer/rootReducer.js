import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import payReducer from './payReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    pay:payReducer,
});

export default rootReducer;