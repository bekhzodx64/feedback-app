import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
			<div className='container'>
				<Link to='/'>
					<h2 style={{ color: '#ff6a95' }}>Feedback UI</h2>
				</Link>
			</div>
		</header>
	)
}

export default Header
