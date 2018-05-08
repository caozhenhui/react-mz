import cookie from '../../modules/cookie'

export default {
	userInfo: cookie.getCookie('userInfo')?JSON.parse(cookie.getCookie('userInfo')):null
}
