import  React, {Component} from 'react';
import './index.scss';
import NavBar from '../../commons/NavBar';
import axios from 'axios';

const GoodItem = ({info}) => {
    return (
        <li className = 'goods'>
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
            goods:[]
        }
        this.scrollList = this.scrollList.bind(this);
        this.page = 1;
        this.num = 10;
        //加载开关，不加开关发送多次数据
        this.loading = false;
    }

    getGoods () {
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
        })
    }

    componentWillMount () {
        this.getGoods()
    }

    render () {
        let { goods } = this.state
        return (
            <div className = 'list'>
                <div className = 'list-head'>
                    ——&nbsp;好货精选&nbsp;——
                </div>
                <ul className = 'goods-box'>
                    {
                        goods.map( item => {
                            return <GoodItem key = {item.id} info = {item}/>
                        })
                    }
                </ul>
                <NavBar/>
            </div>
        )
    }

    scrollList (e) {
        let scrollTop = document.documentElement.scrollTop;
        let clientHeighr = document.documentElement.clientHeight;
        let bodyHeight = document.getElementsByTagName('body')[0].offsetHeight;
        if ( bodyHeight-clientHeighr-50 < scrollTop ) {
            //开关为true时候表示正在加载中不用在次发送数据
           if(this.loading) return false
           this.page++
           this.getGoods()
        }
    }

    componentDidMount () {
        window.addEventListener('scroll',this.scrollList)
    }

    componentWillUnmount () {
        window.removeEventListener('scroll',this.scrollList)
    }
}

export default List