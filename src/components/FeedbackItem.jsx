import Card from './shared/Card'
import { deleteItem } from 'store/features/feedbackSlice'
import { useDispatch } from 'react-redux'

import { AiFillDelete } from 'react-icons/ai'

const FeedbackItem = ({ feedback }) => {
	const { text, rating } = feedback
	const dispatch = useDispatch()

	const deleteItemHandler = (feedback) => {
		dispatch(deleteItem(feedback))
	}

	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<button
				type='button'
				className='close'
				onClick={() => deleteItemHandler(feedback)}
			>
				<AiFillDelete color='red' />
			</button>
			<div className='text-display'>{text}</div>
		</Card>
	)
}

export default FeedbackItem
