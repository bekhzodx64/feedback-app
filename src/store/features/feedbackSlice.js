import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	feedbacks: [],
	averageRating: 0,
}

const feedbackSlice = createSlice({
	name: 'feedbacks',
	initialState,
	reducers: {
		addFeedback: (state, { payload }) => {
			const itemIndex = state.feedbacks.find((item) => item.id === payload.id)

			if (!itemIndex) {
				const tempProduct = { ...payload }
				state.feedbacks.push(tempProduct)
			}
		},
		deleteItem: (state, { payload }) => {
			const findItem = state.feedbacks.filter((item) => item.id !== payload.id)
			state.feedbacks = findItem
		},
		getAverageRating: (state) => {
			let average = state.feedbacks.reduce((acc, cur) => {
				const result = acc + cur.rating
				return result
			}, 0)
			state.averageRating = average / state.feedbacks.length
		},
	},
})

export const { addFeedback, deleteItem, getAverageRating } =
	feedbackSlice.actions
export default feedbackSlice.reducer
