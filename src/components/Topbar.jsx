import React from 'react'
import styled from 'styled-components'

const StyledTopbar = styled.div`
	background-color: #f8d7da;
	padding: 5px;
	text-align: center;
	color: #721c24;
`

const Topbar = () => {
	return (
		<StyledTopbar>
			<p>🎉 Special Discount: Use code SPECIAL20 for 20% off! 🎉</p>
		</StyledTopbar>
	)
}

export default Topbar
