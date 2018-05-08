import  React, {Component} from 'react';
import './index.scss';
import FootNavBar from '../../commons/NavBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreator from '../../../store/car/actionCreator';

class Cars extends Component {
    render () {
        let { buycar } = this.props.car
        return (
            <div className = 'car'>
                {
                    buycar.map(item => {
                        return <div key = {item.id} className = 'car-list'> 
                            <p>{item.masterName}</p>
                            <p>数量：{item.num}*￥{item.price}</p>
                            <p onClick={ this.props.addCar.bind(this, item.id, 1, item.price, item.masterName )}>+</p>
                            <p onClick={ this.props.removeCar.bind(this, item.id, 1)}>-</p>
                        </div>
                    })
                }
               <FootNavBar/>
            </div>
        )
    }
}

export default connect( state=> state, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})(Cars)