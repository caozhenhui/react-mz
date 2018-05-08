import  React, {Component} from 'react';
import './index.scss';
import { NavBar, Icon } from 'antd-mobile';
import Banner from './banner';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreator from '../../../store/car/actionCreator';

class Detail extends Component {
    constructor (props) {
        super (props)
        this.state = {
            data:[],
            isShow:true, //数据返回时渲染
            num:1
        }
        this.addNum = this.addNum.bind(this);
        this.jianNum = this.jianNum.bind(this);
    }

    render () {
        let { isShow }= this.state
        return (
            <div className = 'am-bg'>
               <NavBar
			      mode="dark"
			      icon={<Icon type="left" />}
			      onLeftClick={() => this.props.history.push('/list')}
			    >详情</NavBar>

               <div className = 'banner'>
                    <Banner banners = {this.state.data}/>
               </div>
                {
                    isShow || <div>
                        <p className = 'title'>{this.state.data.masterName}</p>
                        <p className = 'small'>{this.state.data.slaveName}</p>
                        <p className = 'price'>￥{((this.state.data.skuList[0].price)/100).toFixed(2)}</p>
                        <div className = 'detail-list'>
                            <div>快递：{((this.state.data.skuList[0].marketPrice)/100).toFixed(2)}</div>
                            <div>销量：{this.state.data.skuList[0].salesCount}</div>
                            <div className = 'city'>全国</div>
                        </div> 
                        <div className = 'detail-num'>
                            购买数量：
                            <div onClick = {this.jianNum}>-</div>
                            <div>{this.state.num}</div>
                            <div onClick = {this.addNum}>+</div>
                        </div>
                        <div className = 'detail-foot'>
                            <div className = 'buy'  onClick={ this.props.addCar.bind(this, this.state.data.id, this.state.num, ((this.state.data.skuList[0].price)/100).toFixed(2), this.state.data.masterName )}>加入购物车</div>
                        </div>
                    </div>
                }
            </div>
        )
    }

    componentWillMount () {
        //获取数据
        axios.get('/aura/api/item',{
            //路由传递的参数
			params: {id: this.props.match.params.id}
		}).then(res => {
			this.setState({
                data:res.data.data,
                isShow:false
            })
		})
    }
    
    addNum () {
        this.setState({
            num:this.state.num + 1
        })
    }

    jianNum () {
        if(this.state.num === 1) {
            return false
        }else{
            this.setState({
                num:this.state.num - 1
            })
        }
    }
}

export default connect( state => state, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})(Detail)