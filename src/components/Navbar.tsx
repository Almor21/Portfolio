'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

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
	const [naSizes, setNaSizes] = useState<{
		noexpanded: number;
		expanded: number;
	}>();
	const [init, setInit] = useState(true);

	const iconRef = useRef<HTMLImageElement>(null);
	const optRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!(iconRef.current && optRef.current)) return;

		setNaSizes({
			noexpanded: iconRef.current.clientWidth,
			expanded: optRef.current.clientWidth,
		});
		setInit(false);
	}, []);

	return (
		<div
			className="absolute grid grid-cols-2 bg-white rounded-3xl top-1/2 -translate-x-1/2 -translate-y-1/2"
			style={{
				visibility: init ? 'hidden' : 'visible',
			}}
		>
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
							className="rounded-xl focus:outline-none my-2 px-2 py-1 transition-all duration-300 hover:bg-[rgba(205,205,205,0.34)]"
							style={
								path === opt.href
									? {
											backgroundColor: 'black',
									  }
									: {}
							}
						>
							<div
								className="inline-flex items-center overflow-hidden transition-all"
								ref={optRef || null}
								style={{
									width:
										!init && naSizes
											? expand
												? naSizes.expanded
												: naSizes.noexpanded
											: '',
								}}
							>
								<Image
									src={opt.icon}
									alt={opt.alt}
									className="h-8 w-8"
									width={0}
									height={0}
									ref={iconRef}
									style={{
										filter:
											path === opt.href
												? 'invert(1)'
												: '',
									}}
								/>
								<span
									className="ml-2"
									style={{
										filter:
											path === opt.href
												? 'invert(1)'
												: '',
									}}
								>
									{opt.text}
								</span>
							</div>
						</Link>
					);
				})}
			</nav>
		</div>
	);
}

export default Navbar;
