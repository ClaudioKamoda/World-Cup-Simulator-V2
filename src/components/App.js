import { MatchList } from './MatchList'
import { GroupNav } from './GroupNav'
import '../css/styles/App.scss'

export const App = () => {
	return (
		<div className="App">
			<GroupNav />
			<MatchList />
		</div>
	)
}
