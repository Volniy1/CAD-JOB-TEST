'use client'

import Link from 'next/link'

import { Container, Text, Grid, Flex, Group } from '@mantine/core'

import YouTubeEmbed from '@components/youtube/index'
import HomeGrid from '@components/homeGrid/index'
import ContactButton from '@components/contactButton'
import * as S from './styles'

export default function HomePage() {
	return (
		<S.MainSection>
			<Container bg="#ffffff5ef">
				<S.Background />
				<Grid
					gutter="xl"
					align="center"
					h={'100vh'}
					justify="space-between"
					style={{ alignContent: 'center' }}
					w="100%"
					pb={'20vh'}
				>
					<Grid.Col span={{ base: 12, md: 6, sm: 7 }}>
						<Group gap={10}>
							<S.Title>
								<h1>
									Most important <br /> title on the page
								</h1>
							</S.Title>
							<Text size="md" mb="xl">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et
								condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt
								ante
							</Text>
						</Group>
					</Grid.Col>

					<Grid.Col span={{ base: 12, md: 6, sm: 5 }}>
						<YouTubeEmbed />
					</Grid.Col>
				</Grid>
			</Container>
			<S.Section>
				<S.TitleWrapper>
					<S.Title>
						<h2>Also very important title</h2>
					</S.Title>
				</S.TitleWrapper>
				<HomeGrid />
				<S.TitleWrapper>
					<Link href="/contact">
						<ContactButton label="Contact Us" />
					</Link>
				</S.TitleWrapper>
			</S.Section>
			<S.SectionSpecial>
				<S.TitleWrapper>
					<S.Title>
						<h3>Less important title</h3>
					</S.Title>
				</S.TitleWrapper>
				<Flex justify="center">
					<Link href="/contact">
						<ContactButton label="Contact Us" />
					</Link>
				</Flex>
			</S.SectionSpecial>
		</S.MainSection>
	)
}
