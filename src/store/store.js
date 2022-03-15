import { createStore } from 'redux'

const INITIAL_STATE = {
	currentGroup: 'A'
}

const mainReducer = (state = INITIAL_STATE, action) => {
	if (action.type === 'changeCurrentGroup') {
		return {
			currentGroup: action.groupToChange
		}
	}
}

const store = createStore(mainReducer)

export default store
