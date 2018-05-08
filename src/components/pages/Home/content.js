import  React, {Component} from 'react';
import './index.scss';
import actionCreator from '../../../store/homelist/actionCreator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ListItem = ( props ) => {
    let { info } = props
    return (
        <li className = 'goods-item'>
            <img src={info.skuList[0].image} alt='' width = '100%'/>
            <p>{ info.masterName }</p>
            <p><span className = 'price'>￥{((info.skuList[0].price)/100).toFixed(2)}</span>&nbsp;&nbsp;<span>已售{info.skuList[0].salesCount}</span></p>
        </li>
    )
}
class Content extends Component {
    componentDidMount () {
        if(this.props.lists<=0){
            this.props.getList()
        }
    }

    render () {
        let { lists } = this.props
        return (
            <div className ='content'>
               <ul className = 'goods'>
                   {
                       lists.map( item => {
                           return <ListItem key = {item.id} info = {item}/>
                       })
                   }
               </ul>
            </div>
        )
    }
}

export default connect( state => {
    return {
        lists:state.homelist.lists
    }
}, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})(Content)