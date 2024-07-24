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
				className={`${montserrat.className} min-h-screen grid grid-rows-[auto_1fr_auto] justify-items-center`}
				style={{
					scrollbarGutter: 'stable'
				}}
			>
				<Navbar />
				<Header />
				<main className="relative max-w-[1440px] w-full p-8 pl-24 flex items-center">
					{children}
				</main>
				<footer className="h-52 w-full bg-gray-800"></footer>
				<Backgroud />
			</body>
		</html>
	);
}
