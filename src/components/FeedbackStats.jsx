import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAverageRating } from 'store/features/feedbackSlice'

const FeedbackStats = () => {
	const { feedbacks, averageRating } = useSelector((state) => state.feedback)
	const totalAmount = feedbacks.length
	const dispatch = useDispatch()
	
	let average = averageRating?.toFixed(1).replace(/[,.]0$/, '')

	useEffect(() => {
		dispatch(getAverageRating())
	}, [feedbacks, dispatch])


	return (
		<div className='feedback-stats'>
			<h4>{totalAmount === 0 ? `No` : totalAmount} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	)
}

export default FeedbackStats
