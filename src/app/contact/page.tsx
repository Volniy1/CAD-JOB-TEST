'use client'

import { useState } from 'react'

import { isEmail, useForm } from '@mantine/form'
import { Container, Grid, TextInput, Textarea } from '@mantine/core'

import ContactButton from '@components/contactButton'
import { motion } from 'framer-motion'

import * as S from './styles'

export default function ContactPage() {
	const form = useForm({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validate: {
			name: (value) => (value ? null : 'Name is required'),
			email: isEmail('Invalid email'),
			message: (value) => (value ? null : 'Message is required'),
		},
	})

	const [Message, setMessage] = useState('')

	const handleSubmit = async (formData: { name: string; email: string; message: string }) => {
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			})

			const result = await response.json()
			console.log('post:', result)
			setMessage(result)
		} catch (error) {
			console.warn(error)
		}
	}

	return (
		<S.Wrapper>
			<motion.div
				initial={{ backgroundPosition: '0% 0%' }}
				animate={{ backgroundPosition: '100% 100%' }}
				transition={{ duration: 15, repeat: Infinity, repeatType: 'mirror' }}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundImage: "url('/background/image.jpeg')",
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					zIndex: -1,
				}}
			/>
			{!!Message ? (
				<S.SucsessTitle>{Message}</S.SucsessTitle>
			) : (
				<Container>
					<S.Title>Contact Form</S.Title>
					<S.StyledForm onSubmit={form.onSubmit((values) => handleSubmit(values))}>
						<Grid gutter="32">
							<Grid.Col span={{ base: 12, xs: 6 }}>
								<TextInput
									label="Name"
									size="md"
									radius="md"
									className={!form.getInputProps('name').value ? ''.trim() : 'dirty'}
									{...form.getInputProps('name')}
								/>
							</Grid.Col>
							<Grid.Col span={{ base: 12, xs: 6 }}>
								<TextInput
									label="Email Address"
									size="md"
									radius="md"
									type="email"
									className={!form.getInputProps('email').value ? ''.trim() : 'dirty'}
									{...form.getInputProps('email')}
								/>
							</Grid.Col>
							<Grid.Col span={12}>
								<Textarea
									label="Write your message"
									size="md"
									radius="md"
									resize="vertical"
									className={!form.getInputProps('message').value ? ''.trim() : 'dirty'}
									{...form.getInputProps('message')}
								/>
							</Grid.Col>
							<ContactButton label="Submit" type="submit" />
						</Grid>
					</S.StyledForm>
				</Container>
			)}
		</S.Wrapper>
	)
}
