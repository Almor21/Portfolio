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
				className={`${montserrat.className} relative w-full grid grid-rows-[100vh_auto]`}
			>
				<Navbar />
				{/* <div className='w-full grid grid-rows-[auto_1fr]'> */}
				<Header />
				<main>{children}</main>
				{/* </div> */}
				<footer></footer>
				<Backgroud />
			</body>
		</html>
	);
}
