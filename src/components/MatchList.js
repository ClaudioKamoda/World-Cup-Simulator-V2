import { Match } from './Match'
import '../css/styles/MatchList.scss'
import { useSelector } from 'react-redux'

export const MatchList = () => {
	const matchList = useSelector(
		state => state.groups[state.currentGroup].matches
	)

	return (
		<section className="matchList">
			{matchList.map((match, index) => {
				return <Match matchData={match} key={match.id} index={index} />
			})}
		</section>
	)
}
