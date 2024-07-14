'use client';

import React, { useState } from 'react';
import Searcher from '@/components/skills/Searcher';
import MoveBackground from '@/components/MoveBackground';
import DivTransition from '@/components/DivTransition';
import Link from 'next/link';

import { motion } from 'framer-motion';

function SkillsPage() {
	const [option, setOption] = useState(0);

	return (
		<MoveBackground
			createDiv
			width="40%"
			className="grid-rows-[minmax(0,1fr)]"
		>
			<DivTransition className="flex flex-col justify-center pl-10 pr-16 text-white">
				<motion.div
					className="relative flex justify-between"
					initial={{
						y: '100%',
					}}
					animate={{
						y: 0,
					}}
					transition={{
						delay: 1.1,
						duration: 1.1,
						type: 'tween',
						ease: [0, 1, 0.3, 1],
					}}
				>
					<div
						className="relative w-2/5 flex justify-center py-1 cursor-pointer"
						onClick={() => setOption(0)}
					>
						{option == 0 && (
							<motion.span
								layoutId="option"
								className="absolute top-0 left-0 w-full h-full bg-white rounded-t-lg mix-blend-difference"
								transition={{
									layout: {
										duration: 1,
										ease: [0, 0.9, 0.6, 1],
									},
								}}
							/>
						)}
						<span className="inline-block text-2xl">Skills</span>
					</div>
					<div
						className="relative w-2/5 flex justify-center py-1 cursor-pointer"
						onClick={() => setOption(1)}
					>
						{option == 1 && (
							<motion.span
								layoutId="option"
								className="absolute top-0 left-0 w-full h-full bg-white rounded-t-lg mix-blend-difference"
								transition={{
									layout: {
										duration: 1,
										ease: [0, 0.9, 0.6, 1],
									},
								}}
							/>
						)}
						<span className="inline-block text-2xl">Projects</span>
					</div>
				</motion.div>
				<p className="relative z-10 text-justify p-4 rounded-b-lg border border-white bg-black">
					I am fascinated by programming and logic challenges.
					<br />
					Good skills in logic and algorithmic{' '}
					<Link
						href="https://www.codewars.com/users/Almor21"
						target="_blank"
						className="underline font-bold"
					>
						problem-solving
					</Link>
					.
					<br />
					<br />
					My native language is{' '}
					<span className="font-bold">Spanish</span>, but I also speak{' '}
					<span className="font-bold">English</span>, which allows me
					to <span className="font-bold">find</span> and{' '}
					<span className="font-bold">communicate information</span>{' '}
					efficiently.
					<br />
					<br />
					Here you can see the{' '}
					<span className="font-bold">technologies</span> I am
					familiar with. You can{' '}
					<span className="font-bold">filter them</span> by specific
					area or <span className="font-bold">click</span> on one for
					more information.
				</p>
			</DivTransition>
			<Searcher />
		</MoveBackground>
	);
}

export default SkillsPage;
