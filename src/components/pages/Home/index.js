import  React, {Component} from 'react';
import './index.scss';
import NavBar from '../../commons/NavBar';
import Banner from './banner';
import Content from './content';

class Home extends Component {
    render () {
        return (
            <div className ='home'>
                <Banner/>
                <Content/>
                <NavBar/>
            </div>
        )
    }
}

export default Home