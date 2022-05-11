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
					team_name: 'Qatar',
					team_short: 'QAT',
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
					team_name: 'Ecuador',
					team_short: 'ECU',
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
					team_name: 'Senegal',
					team_short: 'SEN',
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
					team_name: 'Netherlands',
					team_short: 'NED',
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
					team_A: 'SEN',
					score_A: 0,
					team_B: 'NED',
					score_B: 0,
					match_date: new Date(
						'November 21, 2022 13:00:00 GMT+03:00'
					),
					stadium: 'Al Thumama'
				},
				{
					id: 'A2',
					team_A: 'QAT',
					score_A: 0,
					team_B: 'ECU',
					score_B: 0,
					match_date: new Date(
						'November 21, 2022 19:00:00 GMT+03:00'
					),
					stadium: 'Al Bayt'
				},
				{
					id: 'A3',
					team_A: 'QAT',
					score_A: 0,
					team_B: 'SEN',
					score_B: 0,
					match_date: new Date(
						'November 25, 2022 16:00:00 GMT+03:00'
					),
					stadium: 'Al Thumama'
				},
				{
					id: 'A4',
					team_A: 'NED',
					score_A: 0,
					team_B: 'ECU',
					score_B: 0,
					match_date: new Date(
						'November 25, 2022 19:00:00 GMT+03:00'
					),
					stadium: 'Khalifa'
				},
				{
					id: 'A5',
					team_A: 'ECU',
					score_A: 0,
					team_B: 'SEN',
					score_B: 0,
					match_date: new Date(
						'November 29, 2022 18:00:00 GMT+03:00'
					),
					stadium: 'Khalifa'
				},
				{
					id: 'A6',
					team_A: 'NED',
					score_A: 0,
					team_B: 'QAT',
					score_B: 0,
					match_date: new Date(
						'November 29, 2022 18:00:00 GMT+03:00'
					),
					stadium: 'Al Bayt'
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
					team_name: 'IR Iran',
					team_short: 'IRN',
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
					team_name: 'United States',
					team_short: 'USA',
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
					team_name: 'Ukraine',
					team_short: 'UKR',
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
					team_B: 'IRN',
					score_B: 0,
					match_date: new Date(
						'November 21, 2022 16:00:00 GMT+03:00'
					),
					stadium: 'Khalifa'
				},
				{
					id: 'B2',
					team_A: 'USA',
					score_A: 0,
					team_B: 'UKR',
					score_B: 0,
					match_date: new Date(
						'November 21, 2022 22:00:00 GMT+03:00'
					),
					stadium: 'Ahmad Bin Ali'
				},
				{
					id: 'B3',
					team_A: 'UKR',
					score_A: 0,
					team_B: 'IRN',
					score_B: 0,
					match_date: new Date(
						'November 25, 2022 13:00:00 GMT+03:00'
					),
					stadium: 'Ahmad Bin Ali'
				},
				{
					id: 'B4',
					team_A: 'ENG',
					score_A: 0,
					team_B: 'USA',
					score_B: 0,
					match_date: new Date(
						'November 25, 2022 22:00:00 GMT+03:00'
					),
					stadium: 'Al Bayt'
				},
				{
					id: 'B5',
					team_A: 'UKR',
					score_A: 0,
					team_B: 'ENG',
					score_B: 0,
					match_date: new Date(
						'November 29, 2022 22:00:00 GMT+03:00'
					),
					stadium: 'Ahmad Bin Ali'
				},
				{
					id: 'B6',
					team_A: 'IRN',
					score_A: 0,
					team_B: 'USA',
					score_B: 0,
					match_date: new Date(
						'November 29, 2022 22:00:00 GMT+03:00'
					),
					stadium: 'Al Thumama'
				}
			]
		},
		C: {
			name: 'Group C',
			teams: [
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
					team_name: 'Saudi Arabia',
					team_short: 'KSA',
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
					team_name: 'Mexico',
					team_short: 'MEX',
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
					team_name: 'Poland',
					team_short: 'POL',
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
					id: 'C1',
					team_A: 'ARG',
					score_A: 0,
					team_B: 'KSA',
					score_B: 0,
					match_date: new Date(
						'November 22, 2022 13:00:00 GMT+03:00'
					),
					stadium: 'Lusail'
				},
				{
					id: 'C2',
					team_A: 'MEX',
					score_A: 0,
					team_B: 'POL',
					score_B: 0,
					match_date: new Date(
						'November 22, 2022 19:00:00 GMT+03:00'
					),
					stadium: 'Stadium 974'
				},
				{
					id: 'C3',
					team_A: 'POL',
					score_A: 0,
					team_B: 'KSA',
					score_B: 0,
					match_date: new Date(
						'November 26, 2022 16:00:00 GMT+03:00'
					),
					stadium: 'Education City'
				},
				{
					id: 'C4',
					team_A: 'ARG',
					score_A: 0,
					team_B: 'MEX',
					score_B: 0,
					match_date: new Date(
						'November 26, 2022 22:00:00 GMT+03:00'
					),
					stadium: 'Lusail'
				},
				{
					id: 'C5',
					team_A: 'POL',
					score_A: 0,
					team_B: 'ARG',
					score_B: 0,
					match_date: new Date(
						'November 30, 2022 22:00:00 GMT+03:00'
					),
					stadium: 'Stadium 974'
				},
				{
					id: 'C6',
					team_A: 'KSA',
					score_A: 0,
					team_B: 'MEX',
					score_B: 0,
					match_date: new Date(
						'November 30, 2022 22:00:00 GMT+03:00'
					),
					stadium: 'Lusail'
				}
			]
		},
		D: {
			name: 'Group D',
			teams: [
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
					team_name: 'Peru',
					team_short: 'PER',
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
				},
				{
					team_name: 'Tunisia',
					team_short: 'TUN',
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
					id: 'D1',
					team_A: 'DEN',
					score_A: 0,
					team_B: 'TUN',
					score_B: 0,
					match_date: new Date(
						'November 22, 2022 16:00:00 GMT+03:00'
					),
					stadium: 'Education City'
				},
				{
					id: 'D2',
					team_A: 'FRA',
					score_A: 0,
					team_B: 'PER',
					score_B: 0,
					match_date: new Date(
						'November 22, 2022 22:00:00 GMT+03:00'
					),
					stadium: 'Al Janoub'
				},
				{
					id: 'D3',
					team_A: 'TUN',
					score_A: 0,
					team_B: 'PER',
					score_B: 0,
					match_date: new Date(
						'November 26, 2022 13:00:00 GMT+03:00'
					),
					stadium: 'Al Janoub'
				},
				{
					id: 'D4',
					team_A: 'FRA',
					score_A: 0,
					team_B: 'DEN',
					score_B: 0,
					match_date: new Date(
						'November 26, 2022 19:00:00 GMT+03:00'
					),
					stadium: 'Stadium 974'
				},
				{
					id: 'D5',
					team_A: 'PER',
					score_A: 0,
					team_B: 'DEN',
					score_B: 0,
					match_date: new Date(
						'November 30, 2022 18:00:00 GMT+03:00'
					),
					stadium: 'Al Janoub'
				},
				{
					id: 'D6',
					team_A: 'TUN',
					score_A: 0,
					team_B: 'FRA',
					score_B: 0,
					match_date: new Date(
						'November 30, 2022 18:00:00 GMT+03:00'
					),
					stadium: 'Education City'
				}
			]
		},
		E: {
			name: 'Group E',
			teams: [
				{
					team_name: 'Spain',
					team_short: 'ESP',
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
					team_name: 'Costa Rica',
					team_short: 'CRC',
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
				},
				{
					team_name: 'Japan',
					team_short: 'JPN',
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
					id: 'E1',
					team_A: 'GER',
					score_A: 0,
					team_B: 'JPN',
					score_B: 0,
					match_date: new Date(
						'November 23, 2022 16:00:00 GMT+03:00'
					),
					stadium: 'Khalifa'
				},
				{
					id: 'E2',
					team_A: 'ESP',
					score_A: 0,
					team_B: 'CRC',
					score_B: 0,
					match_date: new Date(
						'November 23, 2022 19:00:00 GMT+03:00'
					),
					stadium: 'Al Thumama'
				},
				{
					id: 'E3',
					team_A: 'JPN',
					score_A: 0,
					team_B: 'CRC',
					score_B: 0,
					match_date: new Date(
						'November 27, 2022 13:00:00 GMT+03:00'
					),
					stadium: 'Ahmad Bin ALi'
				},
				{
					id: 'E4',
					team_A: 'ESP',
					score_A: 0,
					team_B: 'GER',
					score_B: 0,
					match_date: new Date(
						'November 27, 2022 22:00:00 GMT+03:00'
					),
					stadium: 'Al Bayt'
				},
				{
					id: 'E5',
					team_A: 'JPN',
					score_A: 0,
					team_B: 'ESP',
					score_B: 0,
					match_date: new Date('December 1, 2022 22:00:00 GMT+03:00'),
					stadium: 'Khalifa'
				},
				{
					id: 'E6',
					team_A: 'CRC',
					score_A: 0,
					team_B: 'GER',
					score_B: 0,
					match_date: new Date('December 1, 2022 22:00:00 GMT+03:00'),
					stadium: 'Al Bayt'
				}
			]
		},
		F: {
			name: 'Group F',
			teams: [
				{
					team_name: 'Belgium',
					team_short: 'BEL',
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
					team_name: 'Canada',
					team_short: 'CAN',
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
					team_name: 'Morocco',
					team_short: 'MAR',
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
					team_name: 'Croatia',
					team_short: 'CRO',
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
					id: 'F1',
					team_A: 'MAR',
					score_A: 0,
					team_B: 'CRO',
					score_B: 0,
					match_date: new Date(
						'November 23, 2022 13:00:00 GMT+03:00'
					),
					stadium: 'Al Bayt'
				},
				{
					id: 'F2',
					team_A: 'BEL',
					score_A: 0,
					team_B: 'CAN',
					score_B: 0,
					match_date: new Date(
						'November 23, 2022 22:00:00 GMT+03:00'
					),
					stadium: 'Ahmad Bin Ali'
				},
				{
					id: 'F3',
					team_A: 'BEL',
					score_A: 0,
					team_B: 'MAR',
					score_B: 0,
					match_date: new Date(
						'November 27, 2022 16:00:00 GMT+03:00'
					),
					stadium: 'Al Thumama'
				},
				{
					id: 'F4',
					team_A: 'CRO',
					score_A: 0,
					team_B: 'CAN',
					score_B: 0,
					match_date: new Date(
						'November 27, 2022 19:00:00 GMT+03:00'
					),
					stadium: 'Khalifa'
				},
				{
					id: 'F5',
					team_A: 'CRO',
					score_A: 0,
					team_B: 'BEL',
					score_B: 0,
					match_date: new Date('December 1, 2022 18:00:00 GMT+03:00'),
					stadium: 'Ahmad Bin Ali'
				},
				{
					id: 'F6',
					team_A: 'CAN',
					score_A: 0,
					team_B: 'MAR',
					score_B: 0,
					match_date: new Date('December 1, 2022 18:00:00 GMT+03:00'),
					stadium: 'Al Thumama'
				}
			]
		},
		G: {
			name: 'Group G',
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
					team_name: 'Serbia',
					team_short: 'SRB',
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
					team_name: 'Switzerland',
					team_short: 'SUI',
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
					team_name: 'Cameroon',
					team_short: 'CMR',
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
					id: 'G1',
					team_A: 'SUI',
					score_A: 0,
					team_B: 'CMR',
					score_B: 0,
					match_date: new Date(
						'November 24, 2022 13:00:00 GMT+03:00'
					),
					stadium: 'Al Janoub'
				},
				{
					id: 'G2',
					team_A: 'BRA',
					score_A: 0,
					team_B: 'SRB',
					score_B: 0,
					match_date: new Date(
						'November 24, 2022 22:00:00 GMT+03:00'
					),
					stadium: 'Lusail'
				},
				{
					id: 'G3',
					team_A: 'CMR',
					score_A: 0,
					team_B: 'SRB',
					score_B: 0,
					match_date: new Date(
						'November 28, 2022 13:00:00 GMT+03:00'
					),
					stadium: 'Al Janoub'
				},
				{
					id: 'G4',
					team_A: 'BRA',
					score_A: 0,
					team_B: 'SUI',
					score_B: 0,
					match_date: new Date(
						'November 28, 2022 19:00:00 GMT+03:00'
					),
					stadium: 'Stadium 974'
				},
				{
					id: 'G5',
					team_A: 'SRB',
					score_A: 0,
					team_B: 'SUI',
					score_B: 0,
					match_date: new Date('December 2, 2022 22:00:00 GMT+03:00'),
					stadium: 'Stadium 974'
				},
				{
					id: 'G6',
					team_A: 'CMR',
					score_A: 0,
					team_B: 'BRA',
					score_B: 0,
					match_date: new Date('December 2, 2022 22:00:00 GMT+03:00'),
					stadium: 'Lusail'
				}
			]
		},
		H: {
			name: 'Group H',
			teams: [
				{
					team_name: 'Portugal',
					team_short: 'POR',
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
					team_name: 'Ghana',
					team_short: 'GHA',
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
					team_name: 'Uruguay',
					team_short: 'URU',
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
					team_name: 'Korea Republic',
					team_short: 'KOR',
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
					id: 'H1',
					team_A: 'URU',
					score_A: 0,
					team_B: 'KOR',
					score_B: 0,
					match_date: new Date(
						'November 24, 2022 16:00:00 GMT+03:00'
					),
					stadium: 'Education City'
				},
				{
					id: 'H2',
					team_A: 'POR',
					score_A: 0,
					team_B: 'GHA',
					score_B: 0,
					match_date: new Date(
						'November 24, 2022 19:00:00 GMT+03:00'
					),
					stadium: 'Stadium 974'
				},
				{
					id: 'H3',
					team_A: 'KOR',
					score_A: 0,
					team_B: 'GHA',
					score_B: 0,
					match_date: new Date(
						'November 28, 2022 16:00:00 GMT+03:00'
					),
					stadium: 'Education City'
				},
				{
					id: 'H4',
					team_A: 'POR',
					score_A: 0,
					team_B: 'URU',
					score_B: 0,
					match_date: new Date(
						'November 28, 2022 22:00:00 GMT+03:00'
					),
					stadium: 'Lusail'
				},
				{
					id: 'H5',
					team_A: 'GHA',
					score_A: 0,
					team_B: 'URU',
					score_B: 0,
					match_date: new Date('December 2, 2022 18:00:00 GMT+03:00'),
					stadium: 'Al Janoub'
				},
				{
					id: 'H6',
					team_A: 'KOR',
					score_A: 0,
					team_B: 'POR',
					score_B: 0,
					match_date: new Date('December 2, 2022 18:00:00 GMT+03:00'),
					stadium: 'Education City'
				}
			]
		}
	}
}

const knockoutInitialState = {
	roundOf16: [
		{
			id: 'A1B2',
			team_A: 'TBD',
			score_A: 0,
			team_B: 'TBD',
			score_B: 0,
			match_date: new Date('November 21, 2022 13:00:00 GMT+03:00'),
			stadium: 'Al Thumama'
		},
		{
			id: 'C1D2',
			team_A: 'TBD',
			score_A: 0,
			team_B: 'TBD',
			score_B: 0,
			match_date: new Date('November 21, 2022 13:00:00 GMT+03:00'),
			stadium: 'Al Thumama'
		},
		{
			id: 'E1F2',
			team_A: 'TBD',
			score_A: 0,
			team_B: 'TBD',
			score_B: 0,
			match_date: new Date('November 21, 2022 13:00:00 GMT+03:00'),
			stadium: 'Al Thumama'
		},
		{
			id: 'G1H2',
			team_A: 'TBD',
			score_A: 0,
			team_B: 'TBD',
			score_B: 0,
			match_date: new Date('November 21, 2022 13:00:00 GMT+03:00'),
			stadium: 'Al Thumama'
		},
		{
			id: 'B1A2',
			team_A: 'TBD',
			score_A: 0,
			team_B: 'TBD',
			score_B: 0,
			match_date: new Date('November 21, 2022 13:00:00 GMT+03:00'),
			stadium: 'Al Thumama'
		},
		{
			id: 'D1C2',
			team_A: 'TBD',
			score_A: 0,
			team_B: 'TBD',
			score_B: 0,
			match_date: new Date('November 21, 2022 13:00:00 GMT+03:00'),
			stadium: 'Al Thumama'
		},
		{
			id: 'F1E2',
			team_A: 'TBD',
			score_A: 0,
			team_B: 'TBD',
			score_B: 0,
			match_date: new Date('November 21, 2022 13:00:00 GMT+03:00'),
			stadium: 'Al Thumama'
		},
		{
			id: 'H1G2',
			team_A: 'TBD',
			score_A: 0,
			team_B: 'TBD',
			score_B: 0,
			match_date: new Date('November 21, 2022 13:00:00 GMT+03:00'),
			stadium: 'Al Thumama'
		}
	],
	quarter: [],
	semi: [],
	third: {},
	final: {}
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

const knockoutSlice = createSlice({
	name: 'knockout',
	initialState: knockoutInitialState,
	reducers: {
		blankMatchData(state, action) {}
	}
})

const store = configureStore({
	reducer: {
		selectedGroup: selectedGroupSlice.reducer,
		groupData: groupDataSlice.reducer,
		knockout: knockoutSlice.reducer
	}
})

export const selectedGroupActions = selectedGroupSlice.actions
export const groupDataActions = groupDataSlice.actions
export const knockoutActions = knockoutSlice.actions

export default store
