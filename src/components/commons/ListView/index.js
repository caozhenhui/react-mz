import  React, {Component} from 'react';
import './index.scss';

class ListView extends Component {
    constructor (props) {
        super (props)
        this.scrollList = this.scrollList.bind(this)
    }

    render () {
        return (
            <div>
                { this.renderItem() }
            </div>
        )
    }

    renderItem () {
        let { data, row, className } = this.props

        if(data.length<=0) return '';
        return (
            <ul className = { className }>
                {
                   data.map(item => {
                       return row(item) 
                   })
                }
            </ul>
        )
    }

    componentWillMount () {
        let {data, row, loadMore } = this.props
        if(!data || !row || !loadMore) {
            console.error('参数不全')
        }
    }

    scrollList (e) {
        let scrollTop = document.documentElement.scrollTop;
        let clientHeighr = document.documentElement.clientHeight;
        let bodyHeight = document.getElementsByTagName('body')[0].offsetHeight;
        let distance = this.props.distance || 30;
        if ( bodyHeight-clientHeighr-distance < scrollTop ) {
            this.props.loadMore()
        }
        this.props.isShow()
    }

    componentDidMount () {
        window.addEventListener('scroll',this.scrollList)
    }

    componentWillUnmount () {
        window.removeEventListener('scroll',this.scrollList)
    }

    scrollTop (y=0) {
        document.documentElement.scrollTop = y
    }
}

export default ListView