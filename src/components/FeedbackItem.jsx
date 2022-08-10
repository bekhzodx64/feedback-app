import Card from './shared/Card'
import { deleteItem, editFeedbackHandler } from 'store/features/feedbackSlice'
import { useDispatch } from 'react-redux'

import { IoClose } from 'react-icons/io5'
import { RiEditBoxLine } from 'react-icons/ri'

const FeedbackItem = ({ feedback }) => {
	const { text, rating } = feedback
	const dispatch = useDispatch()

	const deleteItemHandler = (feedback) => {
		dispatch(deleteItem(feedback))
	}

	const handleEditFeedback = (feedback) => {
		dispatch(editFeedbackHandler(feedback))
	}

	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<button
				type='button'
				className='close'
				onClick={() => deleteItemHandler(feedback)}
			>
				<IoClose color='red' size={24} />
			</button>
			<button
				type='button'
				className='edit'
				onClick={() => handleEditFeedback(feedback)}
			>
				<RiEditBoxLine color='darkBlue' size={24} />
			</button>
			<div className='text-display'>{text}</div>
		</Card>
	)
}

export default FeedbackItem
