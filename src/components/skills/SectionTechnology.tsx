import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

function SectionTechnology({
	name,
	percentage,
	openTech,
}: {
	name: string;
	percentage: number;
	openTech: (name: string) => Promise<void>;
}) {
	const degs = 360 * (percentage / 100);

	const [hover, setHover] = useState(false);

	return (
		<motion.div
			className="relative flex flex-col items-center"
			exit={{
				scale: 0,
				transition: {
					duration: 0.2
				}
			}}
		>
			<motion.div
				className="relative w-16 h-16 group"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				initial={{
					scale: 0.7,
				}}
				whileInView={{
					scale: 1,
					transition: {
						duration: 0.2,
					},
				}}
			>
				<Image
					src={`/technologies/${name}.png`}
					alt={`${name} Icon`}
					fill={true}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="filter transition-all duration-200 group-hover:blur-[3px]"
				/>
				<AnimatePresence>
					{hover && (
						<motion.div
							className="absolute w-3/4 h-3/4 top-1/2 left-1/2 p-[0.35rem] rounded-full cursor-pointer"
							onClick={() => {
								if (openTech) openTech(name);
							}}
							style={{
								x: '-50%',
								y: '-50%',
								background: `conic-gradient(black ${degs}deg, #e6e6e6 0deg)`,
							}}
							initial={{
								scale: 0,
							}}
							animate={{
								scale: 1,
							}}
							exit={{
								scale: 0,
							}}
						>
							<div className="h-full w-full rounded-full bg-white flex justify-center items-center text-sm">
								{percentage}%
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
			<span className='inline-block w-24 text-wrap text-center'>{name}</span>
		</motion.div>
	);
}

export default React.memo(SectionTechnology);
