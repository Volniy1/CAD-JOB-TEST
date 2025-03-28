'use client'

import Link from 'next/link'
import styled from 'styled-components'
import ContactButton from '../contactButton/index'

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	position: sticky;
	top: 0;
	z-index: 100;
	backdrop-filter: blur(10px);
	padding: 1rem 2rem;

	background: #ffffffe0;
	border-bottom: 1px solid #00000024;

	@media screen and (max-width: 600px) {
		padding: 1rem 0.5rem;
	}

	h3 {
		color: #2a42ff;
		font-size: 28px;
	}

	a {
		color: #000000;
		text-decoration: none;

		align-content: center;
	}
`

export function Header() {
	return (
		<StyledHeader>
			<Link href="/">
				<h3>SLOGAN</h3>
			</Link>
			<Link href="/contact">
				<ContactButton fw={300} label="Contact Us" isIcon compact />
			</Link>
		</StyledHeader>
	)
}
