import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/SHOPski.svg'

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="logo-container">
				<img src={logo} alt="Logo" className="logo" />
			</div>
			<ul className="nav-list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products">Products</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
