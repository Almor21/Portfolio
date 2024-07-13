'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Variants, motion, scroll } from 'framer-motion';

const parentVariants: Variants = {
	visible: {
		border: '1.5px rgb(255,255,255,0) solid',
		transition: {
			duration: 1,
		},
	},
	hidden: {
		borderColor: 'rgb(255,255,255,1)',
		transition: {
			duration: 1.8,
			when: 'afterChildren',
			delayChildren: 2,
		},
	},
};

const textVariants: Variants = {
	visible: {
		width: 'auto',
		opacity: 1,
	},
	hidden: {
		width: '0',
		opacity: 0,
		marginRight: 0,
		transition: {
			duration: 0.4,
			ease: 'easeOut',
		},
	},
};

function Header() {
	console.log('render')
	const headerRef = useRef<HTMLElement>(null);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const limit = 50;
			let value = window.scrollY / limit;
			value = value > 1 ? 1 : value;
			setProgress(value);
		};
		handleScroll();

		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className="sticky top-0 z-50 flex items-center w-full h-14 px-4 border-[rgba(255,255,255,0.1)]"
			style={{
				borderWidth: progress,
				backdropFilter: `blur(${3 * progress}px) opacity(${progress})`,
				boxShadow: `0 4px 30px rgba(0,0,0,${progress / 10})`,
			}}
			ref={headerRef || null}
		>
			<motion.div
				className={`inline-block mr-auto text-white rounded-full p-1`}
				variants={parentVariants}
				initial="visible"
				animate="hidden"
			>
				<h1 className="flex justify-center items-center">
					E
					<motion.span
						className="inline-block mr-1 overflow-hidden"
						variants={textVariants}
					>
						dinson
					</motion.span>
					N
					<motion.span
						className="inline-block overflow-hidden"
						variants={textVariants}
					>
						oriega
					</motion.span>
				</h1>
			</motion.div>
			<div className="inline-flex ml-auto gap-2">
				<Image
					src={'/icons/Github.svg'}
					className="h-11 w-11"
					alt="Github Icon"
					width={0}
					height={0}
				/>
				<Image
					src={'/icons/Mail.svg'}
					className="h-11 w-11"
					alt="Mail Icon"
					width={0}
					height={0}
				/>
				<Image
					src={'/icons/Linkedin.svg'}
					className="h-11 w-11"
					alt="Linkedin Icon"
					width={0}
					height={0}
				/>
			</div>
		</header>
	);
}

export default Header;
