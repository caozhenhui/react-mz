import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './App';
import './modules/rem';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'swiper/dist/css/swiper.min.css';
import 'antd-mobile/dist/antd-mobile.css'; 

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App/>
        </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
