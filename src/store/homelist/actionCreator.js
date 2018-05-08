import axios from 'axios';

export default {
    getList () {
		return (dispatch) => {
			axios.get('/aura/api/recommend/home',{
				params:{page:3,num:10}
			}).then( (res) => {
				dispatch({
					type:'HOMELIST',
					lists:res.data.data.list
				})
			})
		}	
	}
	
}
