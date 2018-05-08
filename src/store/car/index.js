import _state from './state';

const reducer = (state=_state, action) => {
    let new_state = {...state}
    switch( action.type ){
        case 'CHANGE_CARS':
        new_state.buycar = action.buycar;break;  
        default:break;
    }
    return new_state
}

export default reducer