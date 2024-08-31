import React from 'react';
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
				<main className="relative max-w-[1440px] w-full p-8 md:pl-24 flex justify-center items-center">
					{children}
				</main>
			</div>
			<Footer />
			<Backgroud />
		</>
	);
}

export default PagesLayout;
