'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const ICON_CLASS = '';
const OPTIONS = [
	{
		text: 'Home',
		icon: '/icons/Home.svg',
		alt: 'Home Icon',
		href: '/',
	},
	{
		text: 'About',
		icon: '/icons/User.svg',
		alt: 'About Icon',
		href: '',
	},
	{
		text: 'Skills',
		icon: '/icons/Star.svg',
		alt: 'Skills Icon',
		href: '',
	},
	{
		text: 'Projects',
		icon: '/icons/Folder.svg',
		alt: 'Projects Icon',
		href: '',
	},
	{
		text: 'Contact',
		icon: '/icons/Phone.svg',
		alt: 'Contact Icon',
		href: '',
	},
];

function Navbar() {
	const path = usePathname();
	const [expand, setExpand] = useState(false);

	return (
		<div className="absolute grid grid-cols-2 bg-white rounded-3xl min-w-5 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
			<nav
				className="col-start-2 py-6 px-2 flex flex-col"
				onMouseEnter={() => setExpand(true)}
				onMouseLeave={() => setExpand(false)}
			>
				{OPTIONS.map((opt, index) => {
					return (
						<Link
							key={index}
							href={opt.href}
							className="inline-flex items-center rounded-xl focus:outline-none my-2 px-2 py-1 transition-all duration-150 hover:bg-[#e8e8e8]"
							style={
								path === opt.href
									? {
											backgroundColor: 'black',
									  }
									: {}
							}
						>
							<Image
								src={opt.icon}
								className="inline w-8 h-8"
								alt={opt.alt}
								width={0}
								height={0}
								style={{
									filter:
										path === opt.href ? 'invert(1)' : '',
								}}
							/>
							{expand && (
								<span
									className="ml-2 transition-all"
									style={{
										filter:
											path === opt.href
												? 'invert(1)'
												: '',
									}}
								>
									{opt.text}
								</span>
							)}
						</Link>
					);
				})}
			</nav>
		</div>
	);
}

export default Navbar;
