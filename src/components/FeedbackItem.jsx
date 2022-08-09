const FeedbackItem = ({ feedback }) => {
	const { title, rating } = feedback

	return (
		<div className='card'>
			<div className='num-display'>{rating}</div>
			<div className='text-display'>{title}</div>
		</div>
	)
}

export default FeedbackItem
