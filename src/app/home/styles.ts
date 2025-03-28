import styled from 'styled-components'

export const MainSection = styled.main`
	padding: 60px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	width: 100%;

	@media screen and (max-width: 600px) {
		padding: 2rem 0;
	}
`

export const Title = styled.div`
	font-size: 24px;
	line-height: 1.3;

	@media screen and (max-width: 600px) {
		font-size: 18px;
		line-height: 1.1;
	}
`

export const TitleWrapper = styled.div`
	height: 100px;
	text-align: center;
	align-content: center;
`

export const Background = styled.div`
	position: absolute;
	background-image: url('/background/image2.jpeg');
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100vh;
	object-fit: cover;
	background-size: cover;
	z-index: -1;
`

export const Section = styled.div`
	width: 100%;
	padding: 15px;
	background: #f7f7f7;
`
export const SectionSpecial = styled.div`
	width: 100%;
	padding: 15px;
	background: #f7f7f7 url('/background/image2.jpeg');
	background-blend-mode: multiply;
	background-position: top;
	box-shadow: inset 0em 0em 20px rgba(0, 0, 0, 0.38);
`
