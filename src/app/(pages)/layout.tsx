import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Backgroud from '@/components/Backgroud';

function PagesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			<Header />
			<main className="relative max-w-[1440px] w-full p-8 pl-24 flex items-center">
				{children}
			</main>
			<footer className="h-52 w-full bg-gray-800"></footer>
			<Backgroud />
		</>
	);
}

export default PagesLayout;
