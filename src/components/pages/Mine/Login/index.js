import  React, {Component} from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

let Header = props => {
    return (
        <header>
            <Link to='/'>
                <i className='fa fa-angle-left'></i>
            </Link>
        </header>
    )
}

class Login extends Component {
    render () {
        return (
            <div className = 'Login'>
               <Header/>
               <LoginForm history = {this.props.history}/>
            </div>
        )
    }
}

export default Login