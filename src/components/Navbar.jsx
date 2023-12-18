import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton'

const Container = styled.div`
	height: 100px;
`
const Topbar = styled.div`
	width: 100vw;
	background-color: #f8d7da;
	padding: 5px;
	text-align: center;
	color: #721c24;
`

const NavbarContainer = styled.nav`
	height: 60px;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	background-color: #333;
`

const Logo = styled.div`
	font-size: 24px;
	font-weight: bold;
	color: white;
	flex: 1;
	justify-content: flex-start;
	margin-left: 20px;
`

const NavList = styled.ul`
	list-style: none;
	margin: 10px;
	padding: 10px;
	display: flex;
	justify-content: end;
	flex: 1;
	align-items: center;
`

const NavListItem = styled.li`
	margin-right: 20px;
	align-items: center;
`

const NavLink = styled(Link)`
	text-decoration: none;
	color: white;
`

function MyNavbar() {
	return (
		<Container>
			<Topbar>🎉 Special Discount: Use code SPECIAL20 for 20% off! 🎉</Topbar>
			<NavbarContainer>
				<Logo> SHOPski</Logo>
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
					<NavListItem>
						<IconButton>
							<PersonIcon to="/login" />
						</IconButton>
					</NavListItem>
				</NavList>
			</NavbarContainer>
		</Container>
	)
}

export default MyNavbar
