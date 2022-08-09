import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	feedbacks: [
		{
			title: 'this is a test feedback',
			rating: 7,
		},
		{
			title: 'this is a test feedback 2',
			rating: 8,
		},
	],
}

const feedbackSlice = createSlice({
	name: 'feedbacks',
	initialState,
	reducers: {},
})

export default feedbackSlice.reducer
