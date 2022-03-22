import { images } from '../imageImports'
import '../css/styles/TeamGroupData.scss'

export const TeamGroupData = ({ index, team }) => {
	return (
		<tr>
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
}
