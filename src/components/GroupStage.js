import { MatchList } from './MatchList'
import { GroupNav } from './GroupNav'
import { Group } from './Group'
import '../css/styles/GroupStage.scss'

export const GroupStage = () => {
	return (
		<div className="GroupStage">
			<GroupNav />
			<Group />
			<MatchList />
		</div>
	)
}
