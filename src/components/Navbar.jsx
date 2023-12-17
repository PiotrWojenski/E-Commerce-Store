import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logoipsum-288.svg'

const NavbarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	background-color: #333;
`

const LogoContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const LogoImage = styled.img`
	width: 120px;
	height: auto;
	padding-left: 10px;
`

const NavList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: flex-end;
`

const NavListItem = styled.li`
	margin-right: 20px;
`

const NavLink = styled(Link)`
	text-decoration: none;
	color: white;
`

function MyNavbar() {
	return (
		<>
			<NavbarContainer>
				<LogoContainer>
					<LogoImage src={logo} alt="Logo" />
				</LogoContainer>
				<NavList>
					<NavListItem>
						<NavLink to="/">Home</NavLink>
					</NavListItem>
					<NavListItem>
						<NavLink to="/products">Products</NavLink>
					</NavListItem>
					<NavListItem>
						<NavLink to="/cart">Cart</NavLink>
					</NavListItem>
				</NavList>
			</NavbarContainer>
		</>
	)
}

export default MyNavbar
