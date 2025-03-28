import type { Metadata } from 'next'
import { Roboto, Montserrat } from 'next/font/google'
import { MantineProvider } from '@mantine/core'
import Providers from './providers'
import '@mantine/core/styles.css'
import './styles/globals.scss'

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
})

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Important WebTitle',
	description: 'Important description',
	icons: {
		icon: './favicon.ico',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} ${roboto.className}`}>
				<MantineProvider>
					<Providers>{children}</Providers>
				</MantineProvider>
			</body>
		</html>
	)
}
