import store from '../index';
import { Toast } from 'antd-mobile';

export default {
    getInitCars () {//获取初始化的数据
		return dispatch => {
			setTimeout(() => {				
				let buycar = localStorage.cars?JSON.parse(localStorage.cars):[]
				dispatch({
					type: 'CHANGE_CARS',
					buycar
				})				
			},500)	
		}
	},
	//加入购物车
	addCar (id,num, price, masterName) {
		return dispatch => {
			let buycar = store.getState().car.buycar.slice();
			let isHas = buycar.some(item => {
				if ( item.id === id ) {
					item.num += num
					return true
				}
				return false
			})
			if ( !isHas ) {					
				buycar.push({
					id,num, price, masterName
				})			
			}

			setTimeout(() => {
				Toast.info('添加成功',1)				
				dispatch({
					type:'CHANGE_CARS',
					buycar
				})
			},300)	
		}
	},
	//移除物品
	removeCar (id, num) {
		return dispatch => {
			setTimeout(() => {
				Toast.info('移除成功',1)
				let buycar = store.getState().car.buycar.slice();
				buycar = buycar.filter(item => {
					if ( item.id === id ) {						
						item.num -= num
						if ( item.num<= 0 ){
							return false
						}
						return true
					}
					return true
				})			
				dispatch({
					type: 'CHANGE_CARS',
					buycar
				})		
			}, 300)
		}
	}
}
