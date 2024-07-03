'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
		href: '/about',
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
		icon: '/icons/Contact.svg',
		alt: 'Contact Icon',
		href: '',
	},
];

function Navbar() {
	const [expand, setExpand] = useState(false);
	const [selected, setSelected] = useState(0);
	const path = usePathname();

	return (
		<div className="fixed h-full w-auto flex items-center z-50">
			<motion.div
				className="grid grid-cols-2 bg-white rounded-3xl z-50"
				onMouseEnter={() => setExpand(true)}
				onMouseLeave={() => setExpand(false)}
				style={{
					x: '-100%',
				}}
				animate={
					{
						x: '-50%',
						width: !expand ? '8rem' : '18rem'
					}
				}
				transition={{
					duration: 0.3,
					x: {
						delay: 0.6,
						type:'tween'
					}
				}}
			>
				<nav className="col-start-2 py-6 px-2 flex flex-col gap-3">
					{OPTIONS.map((opt, index) => {
						const select = opt.href === path;

						return (
							<Link
								key={index}
								href={opt.href}
								className={
									(select
										? 'transition-all duration-300 hover:bg-[rgba(205,205,205,0.34)]'
										: '') +
									' relative rounded-xl focus:outline-none px-2 py-1'
								}
							>
								{select && (
									<motion.span
										layout
										layoutId="hover"
										className="absolute bg-white w-full h-full left-0 top-0 rounded-xl mix-blend-difference z-10"
									/>
								)}
								<div className="relative text-black inline-flex items-center gap-2">
									<Image
										src={opt.icon}
										alt={opt.alt}
										className="h-8 w-8"
										width={0}
										height={0}
									/>
									<AnimatePresence>
										{expand && (
											<motion.span
												initial={{
													opacity: 0,
												}}
												animate={{
													opacity: 1,
												}}
												exit={{
													opacity: 0,
												}}
												transition={{
													duration:0.1
												}}
											>
												{opt.text}
											</motion.span>
										)}
									</AnimatePresence>
								</div>
							</Link>
						);
					})}
				</nav>
			</motion.div>
		</div>
	);
}

export default Navbar;
