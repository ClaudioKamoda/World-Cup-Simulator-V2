import '../css/styles/GroupHead.scss'

export const GroupHead = ({ groupName }) => {
	return (
		<tr>
			<th className="groupName">{groupName}</th>
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
	)
}
