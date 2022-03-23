import { useSelector, useDispatch } from 'react-redux'
import '../css/styles/GroupNav.scss'
import { selectedGroupActions } from '../store/store'

export const GroupNav = () => {
	let groupList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
	const dispatcher = useDispatch()
	const current = useSelector(state => state.selectedGroup.currentGroup)

	const isActive = group => {
		if (group === current) {
			return 'active'
		} else {
			return ''
		}
	}

	const clickHandler = group => {
		if (group !== current)
			dispatcher(selectedGroupActions.changeCurrentGroup(group))
	}

	return (
		<nav className="groupNav">
			<ul>
				{groupList.map((group, index) => (
					<li
						key={index}
						className={isActive(group)}
						onClick={() => {
							clickHandler(group)
						}}
					>
						{group}
					</li>
				))}
			</ul>
		</nav>
	)
}
