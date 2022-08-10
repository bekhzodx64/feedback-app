import { useState, useEffect } from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'

import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import {
	addFeedback,
	saveUpdatedFeedback,
	editFeedbackHandler,
} from 'store/features/feedbackSlice'

const FeedbackForm = () => {
	const dispatch = useDispatch()
	const [text, setText] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')
	const [rating, setRating] = useState(10)

	const { edit, editFeedback } = useSelector((state) => state.feedback)

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true)
			setMessage(null)
		} else if (text !== '' && text.trim().length < 10) {
			setMessage('Text must be at least 10 characters')
			setBtnDisabled(true)
		} else {
			setMessage(null)
			setBtnDisabled(false)
		}

		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newFeedback = {
				id: nanoid(),
				text,
				rating,
			}

			if (edit) {
				const newUpdatedFeedback = {
					id: editFeedback.id,
					text,
					rating,
				}
				dispatch(saveUpdatedFeedback(newUpdatedFeedback))
			} else {
				dispatch(addFeedback(newFeedback))
			}
		}
		setText('')
	}

	useEffect(() => {
		if (edit) {
			setBtnDisabled(false)
			setText(editFeedback.text)
			setRating(editFeedback.rating)
		}
	}, [editFeedback])

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us ?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review'
						value={text}
					/>
					<Button type='submit' disabled={btnDisabled}>
						{edit ? 'Save' : 'Send'}
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm
