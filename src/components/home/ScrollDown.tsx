'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function ScrollDown() {
	const [progress, setProgress] = useState(0);
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const limit = 1;
			let value = window.scrollY / limit;
			value = value > 1 ? 1 : value;
			setProgress(value);
		};
		handleScroll();

		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			className="fixed right-5 bottom-5 -z-50"
			style={{
				opacity: 1 - progress,
			}}
			ref={divRef}
		>
			<motion.div
				className="flex items-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
			>
				<motion.div
					className='relative h-6 w-6 max-md:h-4 max-md:w-4'
					animate={{
						y: [0, -5, 0, 5, 0, -5, 0, 5, 0],
					}}
					transition={{
						delay: 5,
						duration: 0.7,
						repeat: Infinity,
						repeatDelay: 10,
						ease: 'easeInOut',
					}}
				>
					<Image
						src="/icons/ArrowDown.svg"
						alt="Arrow Down Icon"
						fill
					/>
				</motion.div>
				<span className='max-md:text-xs'>Scroll Down</span>
			</motion.div>
		</div>
	);
}

export default ScrollDown;
