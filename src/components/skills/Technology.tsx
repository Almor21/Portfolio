import React, { useState } from 'react';
import Image from 'next/image';
import {
	motion,
	AnimatePresence,
} from 'framer-motion';
import Modal from '../Modal';

function Technology({
	name,
	percentage,
}: {
	name: string;
	percentage: number;
}) {
	const degs = 360 * (percentage / 100);
	
	const [hover, setHover] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	return (
		<div className="relative flex flex-col items-center">
			<motion.div
				className="relative w-16 h-16 group"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				initial={{
					scale: 0.5,
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
					className="filter transition-all duration-200 group-hover:blur-[3px]"
				/>
				<AnimatePresence>
					{hover && (
						<motion.div
							className="absolute w-3/4 h-3/4 top-1/2 left-1/2 p-2 rounded-full cursor-pointer"
							onClick={() => setOpenModal(true)}
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
								scale: 0
							}}
						>
							<div className="h-full w-full rounded-full bg-white flex justify-center items-center text-sm">
								{percentage}%
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
			<span>{name}</span>

			<Modal open={openModal} onClose={() => setOpenModal(false)} />
		</div>
	);
}

export default Technology;
