//import { useSelector } from 'react-redux'
import '../css/styles/GroupNav.scss'

export const GroupNav = () => {
	let groupList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
	/*const current = useSelector(state => {
		return state.currentGroup
	})

	const isActive = group => {
		if (group === current) {
			return 'active'
		} else {
			return ''
		}
	}*/

	return (
		<nav className="groupNav">
			<ul>
				{groupList.map((group, index) => (
					<li id={index}>{group}</li>
				))}
			</ul>
		</nav>
	)
}
