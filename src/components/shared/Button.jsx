const Button = ({ children, type, disabled, version }) => {
	return (
		<button
			type={type ? type : 'button'}
			disabled={disabled ? disabled : null}
			className={`btn ${version ? `btn-${version}` : 'btn-primary'}`}
		>
			{children}
		</button>
	)
}

export default Button
