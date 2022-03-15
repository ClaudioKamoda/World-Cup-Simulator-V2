import { useState } from 'react'
import { images } from '../imageImports.js'
import '../css/styles/Match.scss'
import FeatherIcon from 'feather-icons-react'
import { ScoreInput } from './ScoreInput.js'

export const Match = props => {
	const [isEditing, setIsEditing] = useState(false)
	const [buttonIcon, setButtonIcon] = useState('edit-3')

	//TODO: transfer score state to ScoreInput component
	const [scoreA, setScoreA] = useState(0)
	const [scoreB, setScoreB] = useState(0)

	const toggleEdit = () => {
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
					<span>{props.matchData.match_time}</span> -
					<span> {props.matchData.stadium}</span>
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
