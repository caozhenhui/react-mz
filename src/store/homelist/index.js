import _state from './state';

const reducer = (state=_state, action) => {
    let new_state = {...state}
    switch( action.type ){
        case 'HOMELIST':
            new_state.lists = action.lists;break;
        default:break;
    }
   
    return new_state
}

export default reducer