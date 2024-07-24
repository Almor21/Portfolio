import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';

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
				{children}
			</body>
		</html>
	);
}
