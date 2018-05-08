import cookie from '../../modules/cookie'

export default {
    login ( {username, password, success, fail } ) {
		let _fail = fail || function () {}
		let userInfo = {
			username: '二狗子',
			signature: '将来的你一定会感谢现在奋斗的你！'
		}
		return dispatch => {
			setTimeout(() => {
				if (username === '123' && password === '456') {
					dispatch({
						type: 'CHANGENAME',
						userInfo
					})
					//成功回调
					success(userInfo)
					return ;
				}
				_fail()
			},1000)
		}	
	},
	exit () {
		cookie.removeCookie('userInfo')
		return {
			type:'CHANGENAME',
			userInfo:null
		}
	}
	
}
