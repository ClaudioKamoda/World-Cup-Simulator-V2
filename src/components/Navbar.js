import { NavLink } from 'react-router-dom'
import '../css/styles/Navbar.scss'

export const Navbar = () => {
	return (
		<header className="Navbar">
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
		</header>
	)
}
