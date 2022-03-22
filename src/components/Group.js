import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../css/styles/Group.scss'
import { TeamGroupData } from './TeamGroupData'
import { GroupHead } from './GroupHead'

export const Group = () => {
	const selectedGroup = useSelector(state => state.currentGroup)
	const groupData = useSelector(state => state.groups[selectedGroup])

	function EvaluateGroup() {
		const groupMap = new Map()
		const reset = {
			points: 0,
			matches_played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goals_forward: 0,
			goals_against: 0,
			goal_difference: 0
		}

		groupData.teams.forEach(g => {
			groupMap.set(g.team_short, { ...g, ...reset })
		})

		//iterate through matches
		//calculates all data
		groupData.matches.forEach(match => {
			const A = match.team_A
			const B = match.team_B

			groupMap.get(A).matches_played += 1
			groupMap.get(A).goals_forward += A.score
			groupMap.get(A).goals_against += B.score
			groupMap.get(A).goals_difference += A.score - B.score

			groupMap.get(B).matches_played += 1
			groupMap.get(B).goals_forward += B.score
			groupMap.get(B).goals_against += A.score
			groupMap.get(B).goals_difference += B.score - A.score

			if (match.score_A > match.score_B) {
				groupMap.get(A).points += 3
				groupMap.get(A).wins += 1
				groupMap.get(B).losses += 1
			} else if (match.score_B > match.score_A) {
				groupMap.get(B).points += 3
				groupMap.get(B).wins += 1
				groupMap.get(A).losses += 1
			} else {
				groupMap.get(A).points += 1
				groupMap.get(A).draws += 1
				groupMap.get(B).points += 1
				groupMap.get(B).draws += 1
			}
		})

		//sort the group array
	}

	useEffect(() => {
		EvaluateGroup()
	}, [groupData.matches])

	return (
		<table className="groupTable">
			<thead>
				<GroupHead groupName={groupData.name} />
			</thead>
			<tbody>
				{groupData.teams.map((team, index) => {
					return (
						<TeamGroupData key={index} team={team} index={index} />
					)
				})}
			</tbody>
		</table>
	)
}
