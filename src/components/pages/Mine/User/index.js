import  React, {Component} from 'react';
import './index.scss';
import NavBar from '../../../commons/NavBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreator from '../../../../store/user/actionCreator';

class User extends Component {
    exitHandle () {
        this.props.exit();
        this.props.history.push('/')
    }

    render () {
        return (
            <div>
                <p>用户：{ this.props.user.userInfo.username }</p>
                <p>个性签名：{ this.props.user.userInfo.signature }</p>
                <button onClick = { this.exitHandle.bind(this) }>注销</button>
                <NavBar/>
            </div>
        )
    }
}

export default connect(state => state, (dispatch) => {
    return bindActionCreators(actionCreator, dispatch)
})(User)