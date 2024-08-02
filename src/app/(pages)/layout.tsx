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
			<Navbar />
			<Header />
			<main className="relative max-w-[1440px] w-full min-h-screen p-8 pl-24 flex items-center">
				{children}
			</main>
			<Footer />
			<Backgroud />
		</>
	);
}

export default PagesLayout;
