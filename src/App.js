import { Routes, Route } from 'react-router-dom'
import Layout from 'components/shared/Layout'

import HomePage from 'pages/HomePage'
import AboutPage from 'pages/AboutPage'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='about' element={<AboutPage />} />
			</Route>
		</Routes>
	)
}

export default App
