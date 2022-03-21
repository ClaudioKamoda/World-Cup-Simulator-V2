import { createStore } from 'redux'

const INITIAL_STATE = {
	currentGroup: 'A',
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
					id: 1,
					team_A: 'BRA',
					score_A: 0,
					team_B: 'GER',
					score_B: 0,
					match_time: '13:00',
					stadium: 'Education City'
				},
				{
					id: 2,
					team_A: 'FRA',
					score_A: 0,
					team_B: 'ARG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 3,
					team_A: 'FRA',
					score_A: 0,
					team_B: 'BRA',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 4,
					team_A: 'GER',
					score_A: 0,
					team_B: 'ARG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 5,
					team_A: 'BRA',
					score_A: 0,
					team_B: 'ARG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 6,
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
					id: 1,
					team_A: 'ENG',
					score_A: 0,
					team_B: 'SKO',
					score_B: 0,
					match_time: '13:00',
					stadium: 'Education City'
				},
				{
					id: 2,
					team_A: 'DEN',
					score_A: 0,
					team_B: 'SPA',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 3,
					team_A: 'SKO',
					score_A: 0,
					team_B: 'DEN',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 4,
					team_A: 'SPA',
					score_A: 0,
					team_B: 'ENG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 5,
					team_A: 'SKO',
					score_A: 0,
					team_B: 'SPA',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 6,
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

const mainReducer = (state = INITIAL_STATE, action) => {
	if (action.type === 'changeCurrentGroup') {
		console.log('dispatched')
		return {
			...state,
			currentGroup: action.groupToChange
		}
	}
	return state
}

const store = createStore(mainReducer)

export default store
