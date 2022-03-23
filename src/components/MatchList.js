import { Match } from './Match'
import '../css/styles/MatchList.scss'
import { useSelector } from 'react-redux'

export const MatchList = () => {
	const currentGroup = useSelector(state => state.selectedGroup.currentGroup)
	const matchList = useSelector(
		state => state.groupData.groups[currentGroup].matches
	)

	return (
		<section className="matchList">
			{matchList.map((match, index) => {
				return <Match matchData={match} key={match.id} index={index} />
			})}
		</section>
	)
}
