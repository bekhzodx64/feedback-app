import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'
import 'index.css'

import { Provider } from 'react-redux'
import store from 'store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from 'store'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter basename='/feedback-app'>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>
)
