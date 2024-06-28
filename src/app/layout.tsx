import Navbar from '@/components/Navbar';
import { Montserrat } from "next/font/google";
import './globals.css';

const montserrat = Montserrat({
	subsets: ['latin']
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<div id='background_container'>
					<div className='absolute bg-black h-[200vh] w-[50vw] rotate-[30deg] -top-[50vh] -left-[25vw] -z-50'></div>
				</div>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
