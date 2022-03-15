import { useSelector, useDispatch } from 'react-redux'
import '../css/styles/GroupNav.scss'

export const GroupNav = () => {
	let groupList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
	const dispatcher = useDispatch()
	const current = useSelector(state => state.currentGroup)

	const isActive = group => {
		if (group === current) {
			return 'active'
		} else {
			return ''
		}
	}

	const clickHandler = group => {
		dispatcher({ type: 'changeCurrentGroup', groupToChange: group })
		console.log(current)
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
