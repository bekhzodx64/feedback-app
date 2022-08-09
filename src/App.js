import { Fragment } from 'react'
import Header from 'components/Header'
import FeedbackItem from 'components/FeedbackItem'

import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

const App = () => {
	const { feedbacks } = useSelector((state) => state.feedback)

	return (
		<Fragment>
			<Header />
			<div className='container'>
				{feedbacks.map((feedback) => (
					<FeedbackItem key={nanoid()} feedback={feedback} />
				))}
			</div>
		</Fragment>
	)
}

export default App
