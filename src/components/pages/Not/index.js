import  React, {Component} from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

class Not extends Component {
    render () {
        return (
            <div>
                404
                <Link to='/'>返回首页</Link>
            </div>
        )
    }
}

export default Not