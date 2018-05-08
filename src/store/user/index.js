import _state from './state';


const reducer = (state=_state, action) => {
    let new_state = {...state}
    switch( action.type ){
        case 'CHANGENAME':
            new_state.userInfo = action.userInfo;break;  
        default:break;
    }
    return new_state
}

export default reducer