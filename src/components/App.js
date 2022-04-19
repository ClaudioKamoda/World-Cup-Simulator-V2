import { Route, Redirect } from 'react-router-dom'
import { GroupStage } from './GroupStage'
import { KnockoutRound } from './KnockoutRound'
import { Navbar } from './Navbar'
import '../css/styles/App.scss'

export const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Route path="/" exact>
				<Redirect to="/groupStage" />
			</Route>
			<Route path="/groupStage">
				<GroupStage />
			</Route>
			<Route path="/knockoutRound">
				<KnockoutRound />
			</Route>
		</div>
	)
}
