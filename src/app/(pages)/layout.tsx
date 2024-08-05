import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Backgroud from '@/components/Backgroud';
import Footer from '@/components/Footer';

function PagesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="min-h-screen max-md:min-h-svh w-full grid grid-rows-[auto_1fr] justify-items-center">
				<Header />
				<main className="relative max-w-[1440px] w-full md:px-8 py-8 md:pl-24 flex items-center">
					{children}
				</main>
			</div>
			<Footer />
			<Backgroud />
		</>
	);
}

export default PagesLayout;
