import { Fragment } from 'react'
import Header from 'components/Header'
import FeedbackList from 'components/FeedbackList'
import FeedbackStats from 'components/FeedbackStats'
import FeedbackForm from 'components/FeedbackForm'

const App = () => {
	return (
		<Fragment>
			<Header />
			<div className='container'>
				<FeedbackForm />
				<FeedbackStats />
				<FeedbackList />
			</div>
		</Fragment>
	)
}

export default App
