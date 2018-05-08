import  React, {Component} from 'react';
import './index.scss';
import { Route } from 'react-router-dom';
import Login from './Login';
import User from './User';
import { connect } from 'react-redux';

class Mine extends Component {
    componentWillMount () {
        let { path } = this.props.match;
        //如果没有登陆，跳转登陆
       if (!this.props.user.userInfo) {
            this.props.history.replace(path + '/login')
       }else{
            this.props.history.replace(path + '/user')
       }
    }

    render () {
        let { path } = this.props.match;
        return (
            <div>
                <Route path={path + '/login'} component={Login}/>
                <Route path={path + '/user'} component={User}/>
            </div>
        )
    }
}

export default connect( state => state )(Mine)