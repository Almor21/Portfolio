'use client';

import React from 'react';
import Image from 'next/image';
import { Variants, motion } from 'framer-motion';

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
		opacity: 1
	},
	hidden: {
		width: '0',
		opacity: 0,
		marginRight: 0,
		transition: {
			duration: 0.4,
			ease: 'easeOut'
		}
	},
};

function Header() {
	return (
		<header className="sticky top-0 flex items-center w-full h-14 px-4">
			<motion.div
				className={`inline-block mr-auto text-white rounded-full p-1`}
				variants={parentVariants}
				initial="visible"
				animate="hidden"
			>
				<h1 className='flex justify-center items-center'>
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
					src={'/icons/Phone.svg'}
					className="h-11 w-11"
					alt="Linkedin Icon"
					width={0}
					height={0}
				/>
				<Image
					src={'/icons/Mail.svg'}
					className="h-11 w-11"
					alt="Linkedin Icon"
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
