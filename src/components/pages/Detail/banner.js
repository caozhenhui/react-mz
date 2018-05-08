import  React, {Component} from 'react';
import './index.scss';
import Swiper from 'swiper';

const BannerItem = (props) => {
    let { src } = props
    return(
        <div className = 'swiper-slide'>
            <img width = { '100%' } src = { src } alt = ''/>
        </div>
    )
}

class Banner extends Component {
    constructor (props) {
        super (props)
        this.state = {
            banners:[]
        }
    }

    render () {
        //获取到轮播图数据
        let banners = this.props.banners.skuList?this.props.banners.skuList[0].images:[];    
        return (
            <div className = 'swiper-container banners' ref = { el => this.el = el }>
                <div className = 'swiper-wrapper'>
                   {
                       banners.map( (item, index) => {
                           return <BannerItem src = {item} key = {index}/>
                       })
                   }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }

    shouldComponentUpdate (props) {
        //如果上一次状态和这次一样不重新渲染
        if (this.props.banners.id === props.banners.id){
            return false
        }else{
            return true
        }
    }

    componentDidUpdate () {
        //数据变更后 实例化轮播图
        new Swiper(this.el, {
            pagination:{el: '.swiper-pagination'},
            autoplay:true,
            loop:true
        })
    }
}

export default Banner