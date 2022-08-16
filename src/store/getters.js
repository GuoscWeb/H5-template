import * as types from './getter-types.js'
const getters = {
	[types.GET_JWT](state) {
		return state.jwt
	},
}


export default getters