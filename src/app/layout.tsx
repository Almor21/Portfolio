import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Backgroud from '@/components/Backgroud';

const montserrat = Montserrat({
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.className} relative h-[100vh] w-full grid grid-rows-[minmax(100vh,1fr)_auto]`}
			>
				<Navbar />
				<Header />
				<main>{children}</main>
				<footer></footer>
				<Backgroud />
			</body>
		</html>
	);
}
