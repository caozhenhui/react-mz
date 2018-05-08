import  React, {Component} from 'react';
import './index.scss';
import axios from 'axios';
import Swiper from 'swiper';


const BannerItem = (props) => {
    let { info } = props
    return(
        <div className = 'swiper-slide'>
            <img width = { '100%' } src = { info.imageUrl } alt = ''/>
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
    getBanners () {
        axios.get('/mz/v4/api/billboard/home',{
            params: {__t: Date.now()}
        }).then( (res) => {
            this.setState({
                banners:res.data.data.billboards
            })
            setTimeout(() => {
                new Swiper(this.el, {
                    pagination:{el: '.swiper-pagination'},
                    autoplay:true,
                    loop:true
                })
            },0)
        })
    }

    componentWillMount () {
        this.getBanners()
    }

    render () {
        let { banners } = this.state
        return (
            <div className = 'swiper-container banners' ref = { el => this.el = el }>
                <div className = 'swiper-wrapper'>
                    {
                        banners.map(item =>{
                            return <BannerItem key = {item.id} info = {item}/>
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}

export default Banner