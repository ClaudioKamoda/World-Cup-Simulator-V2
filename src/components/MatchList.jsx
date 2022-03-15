import { Match } from './Match.jsx'
import '../css/styles/MatchList.scss'

export const MatchList = () => {
	let matchList = [
		{
			id: 1,
			team_A: 'BRA',
			score_A: 0,
			team_B: 'GER',
			score_B: 0,
			match_date: '21/11',
			match_time: '13:00',
			stadium: 'Education City'
		},
		{
			id: 2,
			team_A: 'FRA',
			score_A: 0,
			team_B: 'ARG',
			score_B: 0,
			match_date: '21/11',
			match_time: '16:00',
			stadium: 'Education City'
		}
	]

	return (
		<section className="matchList">
			{matchList.map(match => {
				return <Match matchData={match} id={match.id} />
			})}
		</section>
	)
}
