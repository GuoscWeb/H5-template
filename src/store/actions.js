import * as types from './action-types.js'

const actions = {
	/* 修改jwt */
	[types.SAVE_JWT]({ commit }, data) {
		commit(types.SAVE_JWT, data)
	}
}

export default actions