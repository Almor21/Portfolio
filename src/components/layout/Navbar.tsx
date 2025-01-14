'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import MenuButton from '../ui/MenuButton';
import useScreenWidth from '@/hook/useScreenWidth';
import useIsTouchDevice from '@/hook/useIsTouchDevice';

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

const useMinMode = () => {
	const screenWidth = useScreenWidth();
	const isTouch = useIsTouchDevice();

	return isTouch || screenWidth < 768;
};

function Navbar() {
	const [expand, setExpand] = useState(false);
	const minMode = useMinMode();
	const path = usePathname();

	return (
		<>
			{minMode && (
				<MenuButton
					className="mr-3 z-20"
					value={expand}
					onChange={(v) => setExpand(v)}
				/>
			)}
			<motion.div
				className={
					'fixed h-screen max-md:h-lvh w-auto top-0 left-0 flex justify-center items-center z-10' +
					(minMode ? ' w-full bg-[rgba(0,0,0,0.5)]' : '')
				}
				initial={{
					x: '-100%',
				}}
				animate={
					!minMode || expand
						? {
								x: 0,
						  }
						: {
								x: '-100%',
						  }
				}
				transition={{
					delay: !minMode ? 0.6 : 0,
					type: 'tween',
				}}
			>
				<motion.div
					className={
						'bg-white rounded-r-3xl z-[1000]' +
						(minMode ? ' rounded-3xl' : '')
					}
					onMouseEnter={() => {
						if (!minMode) setExpand(true);
					}}
					onMouseLeave={() => {
						if (!minMode) setExpand(false);
					}}
					animate={
						!minMode
							? {
									width: !expand ? '4rem' : '10rem',
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
										(!select && !minMode
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
											className={
												'h-8 w-8' +
												(minMode ? ' h-10 w-10' : '')
											}
											width={0}
											height={0}
										/>
										<AnimatePresence>
											{(expand || minMode) && (
												<motion.span
													className={'text-nowrap' +
														(minMode
															? 'text-3xl'
															: '')
													}
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
