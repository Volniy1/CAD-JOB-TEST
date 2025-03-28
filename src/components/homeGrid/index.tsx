import { Grid, Stack, Text, Container } from '@mantine/core'
import styled from 'styled-components'
import {
	IconHeartbeat,
	IconBroadcast,
	IconShoppingCart,
	IconLayout,
	IconCalendar,
	IconMessageCircle,
} from '@tabler/icons-react'

const Card = styled.div`
	background: white;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	text-align: center;
`

const IconWrapper = styled.div`
	background: #4263eb;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin: 0 auto 15px;
	color: white;
`

const items = [
	{
		title: 'Important one',
		content: 'Provident nihil minus qui consequatur non omnis maiores.',
		icon: <IconHeartbeat fill="#ffff" size={24} />,
	},
	{
		title: 'Important two',
		content: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.',
		icon: <IconBroadcast fill="#ffff" size={24} />,
	},
	{
		title: 'Important three',
		content: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.',
		icon: <IconShoppingCart fill="#ffff" size={24} />,
	},
	{
		title: 'Important four',
		content: 'Non et temporibus minus omnis sed dolor esse consequatur.',
		icon: <IconLayout fill="#ffff" size={24} />,
	},
	{
		title: 'Important five',
		content: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut.',
		icon: <IconCalendar fill="#ffff" size={24} />,
	},
	{
		title: 'Important six',
		content: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque.',
		icon: <IconMessageCircle fill="#ffff" size={24} />,
	},
]

export default function HomeGrid() {
	return (
		<Container>
			<Grid gutter={25} align="center">
				{items.map((item, index) => (
					<Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
						<Card>
							<IconWrapper>{item.icon}</IconWrapper>
							<Stack gap={5} align="center">
								<Text size="lg" fw={500}>
									{item.title}
								</Text>
								<Text size="md">{item.content}</Text>
							</Stack>
						</Card>
					</Grid.Col>
				))}
			</Grid>
		</Container>
	)
}
