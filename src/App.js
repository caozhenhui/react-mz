import React, { Component } from 'react';
import './stylesheets/App.scss';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Home, Mine, Cars, List, Not, Detail } from './components/pages';

class App extends Component {
    render() {
		let { routes } = this.props;
		return (
			<div>
				<Switch>
					{
						routes.map(item => {
							return <Route exact={item.exact} path={item.path} component={item.component} key={item.id}/>
						})	
					}
					<Redirect to='/not' />
				</Switch>
			</div>
		);
    }
}

//路由表
App.defaultProps = {
	routes:[
		{ id:1, path:'/', component:Home, exact:true },
		{ id:2, path:'/list', component:List, exact:false },
		{ id:3, path:'/mine', component:Mine, exact:false },
		{ id:4, path:'/cars', component:Cars, exact:false },
		{ id:5, path:'/not', component:Not, exact:false },
		//详情页路由接收一个id参数
		{ id:6, path:'/detail/:id', component:Detail, exact:false }
	]
}
export default withRouter(App);
