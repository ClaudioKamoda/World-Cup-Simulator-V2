import '../css/ScoreInput.scss'

export const ScoreInput = props => {
	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<form className={props.className} onSubmit={handleSubmit}>
			<input
				type="text"
				value={props.value}
				onChange={props.handle}
				maxlength="2"
			/>
		</form>
	)
}
