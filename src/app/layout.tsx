import './globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div id='background_container'>
					<div className='absolute bg-black h-[200vh] w-1/2 rotate-[30deg] -top-[50vh] -left-1/4'></div>
				</div>
				{children}
			</body>
		</html>
	);
}
