import { createStore } from 'redux'

const INITIAL_STATE = {
	currentGroup: 'A'
}

const groupReducer = (state = INITIAL_STATE, action) => {
	if (action.type === 'changeCurrentGGroup') {
		return INITIAL_STATE
	}
}

const store = createStore(groupReducer)

export default store
