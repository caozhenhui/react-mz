import  React, {Component} from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreator from '../../../../../store/user/actionCreator';
import cookie from '../../../../../modules/cookie';

class LoginForm extends Component {
    constructor (props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

    handleSubmit (e) {
        e.preventDefault();
        let { history, login } = this.props;
        let checkbox = this.checkbox.checked;

        login({
            username:this.username.value,
            password:this.password.value,
            success (userInfo) {   
                if(checkbox) {
                    cookie.createCookie('userInfo', JSON.stringify(userInfo),7)
                }
                history.replace('/mine/user');
            },
            fail () {
                alert('登陆失败')
            }
        })
    }

    render () {
        return (
            <form onSubmit = {this.handleSubmit} className = 'login-form'>
                <div className = 'form-group'>
                    <input ref = { el => this.username = el } type = 'text' className ='username' placeholder = '请输入手机号'/>
                    <div className = 'input-bg'></div>
                </div>

                <div className = 'form-group'>
                    <input ref = { el => this.password = el } type = 'password' className ='username' placeholder = '请输入密码'/>
                    <div className = 'input-bg'></div>
                </div>

                <input type = 'submit' value = '登陆' className='btn'/>
                <input type = 'checkbox' ref = { el => this.checkbox = el } id = 'seven'/> <label htmlFor = 'seven'>7天免登陆</label>
            </form>
        )
    }
}

export default connect(state => state, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})(LoginForm)