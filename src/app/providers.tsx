'use client'

import styled from 'styled-components'

import { Footer } from '@components/footer'
import { Header } from '@components/header'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

const ChildWrapper = styled.div`
	display: flex;
	height: 100%;
`

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Wrapper>
			<Header />
			<ChildWrapper>{children}</ChildWrapper>
			<Footer />
		</Wrapper>
	)
}
