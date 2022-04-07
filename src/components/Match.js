import { useState } from 'react'
import { images } from '../imageImports'
import '../css/styles/Match.scss'
import FeatherIcon from 'feather-icons-react'
import { ScoreInput } from './ScoreInput'
import { useDispatch, useSelector } from 'react-redux'
import { groupDataActions } from '../store/store'

export const Match = props => {
	const [isEditing, setIsEditing] = useState(false)
	const [buttonIcon, setButtonIcon] = useState('edit-3')
	const matchDispatcher = useDispatch()
	const currentGroup = useSelector(state => state.selectedGroup.currentGroup)

	//TODO: transfer score state to ScoreInput component
	const [scoreA, setScoreA] = useState(props.matchData.score_A)
	const [scoreB, setScoreB] = useState(props.matchData.score_B)

	const toggleEdit = () => {
		if (isEditing) {
			matchDispatcher(
				groupDataActions.updateMatch({
					group: currentGroup,
					index: props.index,
					score_A: scoreA,
					score_B: scoreB
				})
			)
		}

		setIsEditing(prevState => {
			return !prevState
		})
		setButtonIcon(prevState => {
			if (prevState === 'edit-3') return 'check'
			else return 'edit-3'
		})
	}

	const handleScoreA = e => {
		setScoreA(e.target.value)
	}

	const handleScoreB = e => {
		setScoreB(e.target.value)
	}

	return (
		<div className="match">
			<div className="match__topText">
				<p>
					<span>
						{props.matchData.match_date.getDate() +
							'/' +
							(parseInt(props.matchData.match_date.getMonth()) +
								1)}
					</span>
					{' | '}
					<span>
						{props.matchData.match_date.getHours() + ':00'}
					</span>{' '}
					-<span> {props.matchData.stadium}</span>
				</p>
			</div>
			<img
				className="match__flagA"
				src={images[props.matchData.team_A]}
				alt="Flag"
			/>
			<p className="match__teamA">{props.matchData.team_A}</p>
			{!isEditing && <p className="match__scoreA">{scoreA}</p>}
			{isEditing && (
				<ScoreInput
					className="match__scoreA"
					value={scoreA}
					handle={handleScoreA}
				/>
			)}
			<p className="match__cross">x</p>
			{!isEditing && <p className="match__scoreB">{scoreB}</p>}
			{isEditing && (
				<ScoreInput
					className="match__scoreB"
					value={scoreB}
					handle={handleScoreB}
				/>
			)}
			<p className="match__teamB">{props.matchData.team_B}</p>
			<img
				className="match__flagB"
				src={images[props.matchData.team_B]}
				alt="Flag"
			/>
			<div
				className={`edit${isEditing === true ? ' bg-green' : ''}`}
				onClick={toggleEdit}
			>
				<FeatherIcon icon={buttonIcon} className="edit__icon" />
			</div>
		</div>
	)
}
