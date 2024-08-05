'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import { usePathname } from 'next/navigation';
import MenuButton from './MenuButton';

const BREAKPOINT = 768;

const OPTIONS = [
	{
		text: 'Home',
		icon: '/icons/Home.svg',
		alt: 'Home Icon',
		href: '/home',
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
		href: '/skills',
	},
	{
		text: 'Contact',
		icon: '/icons/Contact.svg',
		alt: 'Contact Icon',
		href: '/contact',
	},
];

function Navbar() {
	const [expand, setExpand] = useState(false);
	const [screenWidth, setScreenWidth] = useState(0);
	const path = usePathname();

	useEffect(() => {
		const resizeEvent = () => {
			setScreenWidth(window.screen.width);
		};
		resizeEvent();

		window.addEventListener('resize', resizeEvent);

		return () => {
			window.removeEventListener('resize', resizeEvent);
		};
	}, []);

	return (
		<>
			<MenuButton
				className="md:hidden mr-3 z-20"
				onActive={() => setExpand(true)}
				onDeactive={() => setExpand(false)}
			/>
			<motion.div
				className="fixed h-screen max-md:h-lvh w-auto max-md:w-full top-0 left-0 max-md:bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-10"
				initial={{
					x: '-100%',
				}}
				animate={
					screenWidth > BREAKPOINT || expand
						? {
								x: 0,
						  }
						: {
								x: '-100%',
						  }
				}
				transition={{
					delay: screenWidth > BREAKPOINT ? 0.6 : 0,
					type: 'tween',
				}}
			>
				<motion.div
					className="bg-white rounded-r-3xl max-md:rounded-3xl z-50"
					onMouseEnter={() => {
						if (screenWidth > BREAKPOINT) setExpand(true);
					}}
					onMouseLeave={() => {
						if (screenWidth > BREAKPOINT) setExpand(false);
					}}
					animate={
						screenWidth > BREAKPOINT
							? {
									width: !expand ? '4rem' : '8.5rem',
							  }
							: {
									width: 'auto',
							  }
					}
					transition={{
						duration: 0.3,
					}}
				>
					<nav className="py-6 px-2 flex flex-col gap-4">
						{OPTIONS.map((opt, index) => {
							const select = opt.href === path;

							return (
								<Link
									key={index}
									href={opt.href}
									className={
										(!select
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
											className="h-8 w-8 max-md:h-10 max-md:w-10"
											width={0}
											height={0}
										/>
										<AnimatePresence>
											{(expand ||
												screenWidth < BREAKPOINT) && (
												<motion.span
													className="max-md:text-3xl"
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
														duration: 0.1,
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
			</motion.div>
		</>
	);
}

export default Navbar;
