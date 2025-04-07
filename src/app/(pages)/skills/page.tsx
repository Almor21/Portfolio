'use client';

import React, { useState } from 'react';
import Searcher from '@/components/skills/Searcher';
import MoveBackground from '@/components/transitions/MoveBackground';
import DivTransition from '@/components/transitions/DivTransition';
import Link from 'next/link';

import { motion } from 'framer-motion';

function SkillsPage() {
	const [option, setOption] = useState(0);

	return (
		<MoveBackground
			createDiv
			className="md:grid-cols-[40%_1fr] w-full items-center"
		>
			<DivTransition className="flex justify-center md:pl-10 md:pr-16 max-md:pb-8 text-white">
				<motion.div
					className="relative flex flex-col justify-between select-none"
					initial={{
						x: '100%',
					}}
					animate={{
						x: 0,
					}}
					transition={{
						delay: 1.1,
						duration: 1.1,
						type: 'tween',
						ease: [0, 1, 0.3, 1],
					}}
				>
					<div
						className="relative w-10 h-1/2 flex justify-center items-center cursor-pointer"
						onClick={() => setOption(0)}
					>
						<span className="inline-block mix-blend-difference text-2xl h-min -rotate-90">
							Technologies
						</span>
					</div>
					<div
						className="relative w-10 h-1/2 flex justify-center items-center cursor-pointer"
						onClick={() => setOption(1)}
					>
						<span className="inline-block mix-blend-difference text-2xl h-min -rotate-90">
							Projects
						</span>
					</div>
					<motion.span
						className="absolute top-0 left-0 w-full h-1/2 bg-white mix-blend-difference"
						animate={
							option == 0
								? {
										y: 0,
										borderTopLeftRadius: '0.8rem',
								  }
								: {
										y: '100%',
										borderBottomLeftRadius: '0.8rem',
								  }
						}
						transition={{
							duration: 0.3,
							ease: 'easeOut',
						}}
					/>
				</motion.div>
				<div className="relative min-h-[30rem] max-w-96 z-10 text-justify flex flex-col gap-2 justify-around p-4 rounded-r-lg border border-white bg-black">
					<p>
						Here you can see the{' '}
						<span className="font-bold">technologies</span> and{' '}
						<span className="font-bold">projects</span> I am
						familiar with. You can{' '}
						<span className="font-bold">filter them</span> by
						specific area or{' '}
						<span className="font-bold">click</span> on one for more
						information.
					</p>
					<p>
						I am fascinated by{' '}
						<span className="font-bold">programming</span> and{' '}
						<span className="font-bold">logic challenges. </span>
						Good skills in logic and algorithmic{' '}
						<Link
							href="https://www.codewars.com/users/Almor21"
							target="_blank"
							className="underline font-bold"
						>
							problem-solving
						</Link>
						.
					</p>
					<p>
						My native language is{' '}
						<span className="font-bold">Spanish</span>, but I also
						speak <span className="font-bold">English</span>, which
						allows me to <span className="font-bold">find</span> and{' '}
						<span className="font-bold">
							communicate information
						</span>{' '}
						efficiently.
					</p>
				</div>
			</DivTransition>
			<Searcher
				className="md:px-12 max-md:pt-8"
				mode={option == 0 ? 'skills' : 'projects'}
			/>
		</MoveBackground>
	);
}

export default SkillsPage;
