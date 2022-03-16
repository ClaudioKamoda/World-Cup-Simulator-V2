import { useSelector } from 'react-redux'
import { images } from '../imageImports'
import '../css/styles/Group.scss'

export const Group = () => {
	const selectedGroup = useSelector(state => state.currentGroup)
	const groupData = useSelector(state => state.groups[selectedGroup])

	return (
		<table className="groupTable">
			<tr>
				<th className="groupName">{groupData.name}</th>
				<th>
					P<span className="tooltip">Points</span>
				</th>
				<th>
					MP<span className="tooltip">Matches Played</span>
				</th>
				<th>
					W<span className="tooltip">Wins</span>
				</th>
				<th>
					D<span className="tooltip">Draws</span>
				</th>
				<th>
					L<span className="tooltip">Losses</span>
				</th>
				<th>
					GF<span className="tooltip">Goals Forward</span>
				</th>
				<th>
					GA<span className="tooltip">Goals Against</span>
				</th>
				<th>
					GD<span className="tooltip">Goal Difference</span>
				</th>
			</tr>
			{groupData.teams.map((team, index) => {
				return (
					<tr key={index}>
						<td className="teamName">
							{/*{teamName: true, lastIndex: index == 3}*/}
							<p className="index">{index + 1}</p>
							<img
								src={images[team.team_short]}
								alt={`${team.team_name} flag`}
							/>
							<p>{team.team_name}</p>
						</td>
						<td>{team.points}</td>
						<td>{team.matches_played}</td>
						<td>{team.wins}</td>
						<td>{team.draws}</td>
						<td>{team.losses}</td>
						<td>{team.goals_forward}</td>
						<td>{team.goals_against}</td>
						<td>{team.goal_difference}</td>
					</tr>
				)
			})}
		</table>
	)
}
