import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {
	const { feedbacks } = useSelector((state) => state.feedback)

	if (!feedbacks || feedbacks.length === 0) {
		return <p>No feedback Yet</p>
	}

	return (
		<div className='feedback-list'>
			{feedbacks.map((feedback) => (
				<FeedbackItem key={nanoid()} feedback={feedback} />
			))}
		</div>
	)
}

export default FeedbackList
