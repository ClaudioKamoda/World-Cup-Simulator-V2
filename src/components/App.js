import { MatchList } from './MatchList'
import { GroupNav } from './GroupNav'
import { Group } from './Group'
import '../css/styles/App.scss'

export const App = () => {
	return (
		<div className="App">
			<GroupNav />
			<Group />
			<MatchList />
		</div>
	)
}
