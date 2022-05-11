import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../css/styles/KnockoutRound.scss'
import { MatchKnockout } from './MatchKnockout'

export const KnockoutRound = () => {
	const currentGroup = useSelector(state => state.selectedGroup.currentGroup)
	const groupData = useSelector(state => state.groupData.groups[currentGroup])

	const knockoutMatches = useSelector(state => state.knockout)
	let data = {
		phase: 'Semi-final',
		team_A: 'BRA',
		score_A: 2,
		team_B: 'FRA',
		score_B: 0
	}

	function blankMatchData() {}

	useEffect(() => {
		blankMatchData()
	}, [knockoutMatches.semi])

	return (
		<main className="knockoutRound">
			<section className="matches">
				<MatchKnockout className="oitavas1" matchData={data} />
				<MatchKnockout className="oitavas2" matchData={data} />
				<MatchKnockout className="oitavas3" matchData={data} />
				<MatchKnockout className="oitavas4" matchData={data} />
				<MatchKnockout className="oitavas5" matchData={data} />
				<MatchKnockout className="oitavas6" matchData={data} />
				<MatchKnockout className="oitavas7" matchData={data} />
				<MatchKnockout className="oitavas8" matchData={data} />

				<MatchKnockout className="quartas1" matchData={data} />
				<MatchKnockout className="quartas2" matchData={data} />
				<MatchKnockout className="quartas3" matchData={data} />
				<MatchKnockout className="quartas4" matchData={data} />

				<MatchKnockout className="semiFinal1" matchData={data} />
				<MatchKnockout className="semiFinal2" matchData={data} />

				<MatchKnockout className="terceiro" matchData={data} />

				<MatchKnockout className="final" matchData={data} />

				<div className="connectLines borderArea1"></div>
				<div className="connectLines borderArea2"></div>
				<div className="connectLines borderArea3"></div>
				<div className="connectLines borderArea4"></div>
				<div className="connectLines borderArea5"></div>
				<div className="connectLines borderArea6"></div>
				<div className="connectLines borderArea7"></div>
				<div className="connectLines borderArea8"></div>
				<div className="connectLines borderArea9"></div>
			</section>
		</main>
	)
}
