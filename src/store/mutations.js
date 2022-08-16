import * as types from './action-types.js'

const mutations = {
	[types.SAVE_JWT](state, data) {
		state.jwt = data
	}
}

export default mutations
