import styled from 'styled-components'

export const Wrapper = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;

	.mantine-Container-root {
		backdrop-filter: blur(10px);
		padding: 2rem 1rem;
		border-radius: 5px;
		background: #ffffff3b;
	}
`

export const StyledForm = styled.form`
	.mantine-TextInput-root,
	.mantine-Textarea-root {
		margin-bottom: 1rem;
		position: relative;
	}

	.mantine-TextInput-input,
	.mantine-Textarea-input {
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;

		&:focus,
		&:focus-within {
			outline: none;
			border: 2px solid rgb(76, 110, 245);
			box-shadow: rgb(76, 110, 245) 0px 0px 2px;
		}

		transition: all 0.1s ease;
	}

	.mantine-TextInput-label,
	.mantine-Textarea-label {
		color: #575757;
		position: absolute;
		top: 0.6rem;
		left: 0.95rem;
		transition: all 0.2s ease;
		pointer-events: none;
		padding: 0 0.25rem;
		z-index: 1;
		transition: all 0.3s ease;
	}

	.mantine-TextInput-error,
	.mantine-Textarea-error {
		position: absolute;
	}

	.dirty {
		.mantine-TextInput-label,
		.mantine-Textarea-label {
			top: -1.5rem;
			left: 0;
			color: #000000;
		}
	}
`

export const Title = styled.h1`
	text-align: center;
	margin-bottom: 2rem;
	font-size: 42px;
	letter-spacing: 10px;
	color: #000000;

	@media screen and (max-width: 600px) {
		font-size: 40px;
		letter-spacing: 10px;
		line-height: 45px;
	}
`

export const SucsessTitle = styled.h3`
	text-align: center;
	margin-bottom: 2rem;
	font-size: 42px;
	color: #000000;

	backdrop-filter: blur(10px);
	padding: 2rem 1rem;

	@media screen and (max-width: 400px) {
		font-size: 28px;
		line-height: 28px;
	}
`
