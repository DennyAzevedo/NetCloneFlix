import React from 'react'
import './Header.css'

const Header = ({ black }) => {
	return (
		<header className={black ? 'black' : ''}>
			<div className="header-logo">
				<a href="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="NetFlix" />
				</a>
			</div>
			<div className="header-user">
				<img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
			</div>
		</header>
	)
}

export default Header