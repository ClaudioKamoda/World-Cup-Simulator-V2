import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
	currentGroup: 'A'
}

const groupInitialState = {
	groups: {
		A: {
			name: 'Group A',
			teams: [
				{
					team_name: 'Brazil',
					team_short: 'BRA',
					points: 0,
					matches_played: 0,
					wins: 0,
					draws: 0,
					losses: 0,
					goals_forward: 0,
					goals_against: 0,
					goal_difference: 0
				},
				{
					team_name: 'Argentina',
					team_short: 'ARG',
					points: 0,
					matches_played: 0,
					wins: 0,
					draws: 0,
					losses: 0,
					goals_forward: 0,
					goals_against: 0,
					goal_difference: 0
				},
				{
					team_name: 'France',
					team_short: 'FRA',
					points: 0,
					matches_played: 0,
					wins: 0,
					draws: 0,
					losses: 0,
					goals_forward: 0,
					goals_against: 0,
					goal_difference: 0
				},
				{
					team_name: 'Germany',
					team_short: 'GER',
					points: 0,
					matches_played: 0,
					wins: 0,
					draws: 0,
					losses: 0,
					goals_forward: 0,
					goals_against: 0,
					goal_difference: 0
				}
			],
			matches: [
				{
					id: 'A1',
					team_A: 'BRA',
					score_A: 0,
					team_B: 'GER',
					score_B: 0,
					match_time: '13:00',
					stadium: 'Education City'
				},
				{
					id: 'A2',
					team_A: 'FRA',
					score_A: 0,
					team_B: 'ARG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 'A3',
					team_A: 'FRA',
					score_A: 0,
					team_B: 'BRA',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 'A4',
					team_A: 'GER',
					score_A: 0,
					team_B: 'ARG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 'A5',
					team_A: 'BRA',
					score_A: 0,
					team_B: 'ARG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 'A6',
					team_A: 'FRA',
					score_A: 0,
					team_B: 'GER',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				}
			]
		},
		B: {
			name: 'Group B',
			teams: [
				{
					team_name: 'England',
					team_short: 'ENG',
					points: 0,
					matches_played: 0,
					wins: 0,
					draws: 0,
					losses: 0,
					goals_forward: 0,
					goals_against: 0,
					goal_difference: 0
				},
				{
					team_name: 'Spain',
					team_short: 'SPA',
					points: 0,
					matches_played: 0,
					wins: 0,
					draws: 0,
					losses: 0,
					goals_forward: 0,
					goals_against: 0,
					goal_difference: 0
				},
				{
					team_name: 'South Korea',
					team_short: 'SKO',
					points: 0,
					matches_played: 0,
					wins: 0,
					draws: 0,
					losses: 0,
					goals_forward: 0,
					goals_against: 0,
					goal_difference: 0
				},
				{
					team_name: 'Denmark',
					team_short: 'DEN',
					points: 0,
					matches_played: 0,
					wins: 0,
					draws: 0,
					losses: 0,
					goals_forward: 0,
					goals_against: 0,
					goal_difference: 0
				}
			],
			matches: [
				{
					id: 'B1',
					team_A: 'ENG',
					score_A: 0,
					team_B: 'SKO',
					score_B: 0,
					match_time: '13:00',
					stadium: 'Education City'
				},
				{
					id: 'B2',
					team_A: 'DEN',
					score_A: 0,
					team_B: 'SPA',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 'B3',
					team_A: 'SKO',
					score_A: 0,
					team_B: 'DEN',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 'B4',
					team_A: 'SPA',
					score_A: 0,
					team_B: 'ENG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 'B5',
					team_A: 'SKO',
					score_A: 0,
					team_B: 'SPA',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 'B6',
					team_A: 'DEN',
					score_A: 0,
					team_B: 'ENG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				}
			]
		}
	}
}

const selectedGroupSlice = createSlice({
	name: 'selectedGroup',
	initialState,
	reducers: {
		changeCurrentGroup(state, action) {
			state.currentGroup = action.payload
		}
	}
})

const groupDataSlice = createSlice({
	name: 'groupData',
	initialState: groupInitialState,
	reducers: {
		updateMatch(state, action) {
			state.groups[action.payload.group].matches[
				action.payload.index
			].score_A = action.payload.score_A

			state.groups[action.payload.group].matches[
				action.payload.index
			].score_B = action.payload.score_B
		},
		updateGroup(state, action) {
			state.groups[action.payload.group].teams = action.payload.teams
		}
	}
})

const store = configureStore({
	reducer: {
		selectedGroup: selectedGroupSlice.reducer,
		groupData: groupDataSlice.reducer
	}
})

export const selectedGroupActions = selectedGroupSlice.actions
export const groupDataActions = groupDataSlice.actions

export default store
