import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../css/styles/Group.scss'
import { TeamGroupData } from './TeamGroupData'
import { GroupHead } from './GroupHead'
import { groupDataActions } from '../store/store'

export const Group = () => {
	const selectedGroup = useSelector(state => state.selectedGroup.currentGroup)
	const groupData = useSelector(
		state => state.groupData.groups[selectedGroup]
	)
	const dispatcher = useDispatch()
	const groupMap = new Map()

	function EvaluateGroup() {
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
			groupMap.get(A).goals_forward += Number(match.score_A)
			groupMap.get(A).goals_against += Number(match.score_B)
			groupMap.get(A).goal_difference += match.score_A - match.score_B

			groupMap.get(B).matches_played += 1
			groupMap.get(B).goals_forward += Number(match.score_B)
			groupMap.get(B).goals_against += Number(match.score_A)
			groupMap.get(B).goal_difference += match.score_B - match.score_A

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
		const unsorted = Array.from(groupMap.values())
		const sortedTeams = unsorted.sort((a, b) => {
			if (a.points > b.points) return -1
			if (a.points < b.points) return 1

			if (a.goal_difference > b.goal_difference) return -1
			if (a.goal_difference < b.goal_difference) return 1

			if (a.goals_forward > b.goals_forward) return -1
			if (a.goals_forward < b.goals_forward) return 1

			return 0
		})

		dispatcher(
			groupDataActions.updateGroup({
				group: selectedGroup,
				teams: sortedTeams
			})
		)
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
