import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
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
				className={`${montserrat.className} relative grid grid-rows-[100vh_auto]`}
			>
				<Navbar />
				<div className="w-full grid grid-rows-[auto_minmax(0,1fr)]">
					<Header />
					<main className='pl-24 pr-16 py-5'>{children}</main>
				</div>
				<footer></footer>
				<Backgroud />
			</body>
		</html>
	);
}
