import { NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<Header>
			<nav>
				<ul>
					<li>
						<NavLink to="/groupStage">Group Stage</NavLink>
					</li>
					<li>
						<NavLink to="/knockoutRound">Knockout Round</NavLink>
					</li>
				</ul>
			</nav>
		</Header>
	)
}
