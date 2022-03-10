import { useState } from 'react'
import { images } from '../imageImports.js'
import '../css/Match.scss'

export const Match = props => {
	const [isEditing, setIsEditing] = useState(false)
	let scoreA = 0
	let scoreB = 0

	const toggleEdit = () => {
		setIsEditing(prevState => {
			return !prevState
		})
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
				<form className="match__scoreA">
					<input type="text" value={scoreA} maxlength="2" />
				</form>
			)}
			<p className="match__cross">x</p>
			{!isEditing && <p className="match__scoreB">{scoreB}</p>}
			{isEditing && (
				<form className="match__scoreB">
					<input type="text" value={scoreB} maxlength="2" />
				</form>
			)}
			<p className="match__teamB">{props.matchData.team_B}</p>
			<img
				className="match__flagB"
				src={images[props.matchData.team_B]}
				alt="Flag"
			/>
			<div className="edit editButtonClass" onClick={toggleEdit}></div>
		</div>
	)
}
