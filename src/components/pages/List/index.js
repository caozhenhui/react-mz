import  React, {Component} from 'react';
import './index.scss';
import NavBar from '../../commons/NavBar';
import axios from 'axios';
import ListView from '../../commons/ListView';
import { Toast } from 'antd-mobile';

const GoodItem = ({info, toDetail}) => {
    //传入实参
    toDetail = toDetail.bind(this,info.id)
    return (
        <li className = 'goods' onClick= {toDetail}>
            <img src= {info.skuList[0].image} alt='' width = '100%'/>
            <p>{ info.masterName }</p>
            <p>
                <span className = 'price'>￥{((info.skuList[0].price)/100).toFixed(2)}
                </span>&nbsp;&nbsp;<span>已售{info.skuList[0].salesCount}</span>
            </p>
        </li>
    )
};

class List extends Component{
    constructor (props) {
        super (props)
        this.state = {
            goods:[],
            isShow:true
        }
        this.page = 1;
        this.num = 10;
        //加载开关，不加开关发送多次数据
        this.loading = false;
        //没有更多
        this.hasMore = true;
        this.loadMore = this.loadMore.bind(this);
        this.backTop = this.backTop.bind(this);
        this.BackTopShow = this.BackTopShow.bind(this);
        this.toDetail = this.toDetail.bind(this);
    }

    //跳转详情页方法
    toDetail (id) {
        //传递一个id给Detail组件
        this.props.history.push('/detail/'+id)
    }

    //获取数据方法
    getGoods () {
        //开启加载交互
        Toast.loading('Loading...', 0, ()=>{},true);
        //加载时候开关为true
        this.loading = true;
        let { page, num } = this
        axios.get('/aura/api/recommend/home',{
            params:{
                page,num
            }
        }).then( (res) => {
            this.setState({
                goods:this.state.goods.concat(res.data.data.list)
            })
            this.loading = false
            if(this.page*this.num >= res.data.data.total) {
                this.hasMore = false;
            }
            //关闭加载交互
            Toast.hide()
        })
    }

    componentWillMount () {
        this.getGoods()
    }

    render () {
        let { goods, isShow } = this.state
        let row = (info) => {
            return <GoodItem info = {info} key={info.id} toDetail = {this.toDetail} />
        }
        return (
            <div className = 'list'>
                <div className = 'list-head'>
                    ——&nbsp;好货精选&nbsp;——
                </div>
                <ListView 
                    ref = {el => this.st = el}
                    data = {goods}
                    row = {row}
                    loadMore = {this.loadMore}
                    distance = {50}
                    className = {'goods-box'}
                    isShow = {this.BackTopShow}
                />
               {
                  isShow ||    <div className = 'scrollTop' onClick={this.backTop}>
                                    <i className = 'fa fa-arrow-up'></i>
                                </div>
               }
                <NavBar/>
            </div>
        )
    }

    loadMore () {
        //开关为true时候表示正在加载中不用在次发送数据
        if(this.loading) return false
        if(!this.hasMore) {
            Toast.info('没有更多',1)
            return false
        }
        this.page++
        this.getGoods()
    }

    backTop () {
        this.st.scrollTop()
    }

    BackTopShow () {
        if (document.documentElement.scrollTop> 500) {
            if( this.state.isShow === false){
                return false
            }else{
                this.setState({
                    isShow:false
                })
            }
        }else{
            if( this.state.isShow === true){
                return false
            }else{
                this.setState({
                    isShow:true
                })
            }
        }
    }
}

export default List