import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/Header'
import AboutIconLink from 'components/AboutIconLink'

const Layout = () => {
	return (
		<Fragment>
			<Header />
			<Outlet />
			<AboutIconLink />
		</Fragment>
	)
}

export default Layout
