import { images } from '../imageImports'
import '../css/styles/MatchKnockout.scss'

export const MatchKnockout = props => {
	return (
		<div className={'matchKnockout' + ' ' + props.className}>
			<p>{props.matchData.phase}</p>
			<div className="matchKnockout--team">
				<img
					className="matchKnockout--team__img"
					src={images[props.matchData.team_A]}
					alt="Flag"
				/>
				<p>{props.matchData.team_A}</p>
				<p className="matchKnockout--team__score">
					{props.matchData.score_A}
				</p>
			</div>
			<div className="matchKnockout--team">
				<img
					className="matchKnockout--team__img"
					src={images[props.matchData.team_B]}
					alt="Flag"
				/>
				<p>{props.matchData.team_B}</p>
				<p className="matchKnockout--team__score">
					{props.matchData.score_B}
				</p>
			</div>
		</div>
	)
}
