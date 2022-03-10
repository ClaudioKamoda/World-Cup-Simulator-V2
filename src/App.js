import { Match } from './components/Match.js'

export const App = () => {
	let test = {
		id: 1,
		team_A: 'BRA',
		score_A: 0,
		team_B: 'GER',
		score_B: 0,
		match_date: '21/11',
		match_time: '13:00',
		stadium: 'Education City'
	}

	return (
		<div className="App">
			<Match matchData={test} />
		</div>
	)
}
