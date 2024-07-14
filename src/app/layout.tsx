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
			<body className={`${montserrat.className} flex justify-center`}>
				<div className="relative max-w-[1440px] w-full grid grid-rows-[minmax(100vh,auto)_auto]">
					<Navbar />
					<div className="grid grid-rows-[auto_minmax(0,1fr)]">
						<Header />
						<main className="relative pl-24 pr-16 flex items-center">
							{children}
						</main>
					</div>
					<footer className="h-52 bg-gray-800"></footer>
					<Backgroud />
				</div>
			</body>
		</html>
	);
}
