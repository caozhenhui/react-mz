import { combineReducers } from 'redux';
import user from './user';
import homelist from './homelist';
import car from './car';

const reducer = combineReducers({
    user, homelist, car
})

export default reducer