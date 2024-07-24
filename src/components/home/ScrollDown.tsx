'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function ScrollDown() {
	const [show, setShow] = useState(false);
	const [progress, setProgress] = useState(0);
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const limit = 30;
			let value = window.scrollY / limit;
			value = value > 1 ? 1 : value;
			setProgress(value);
		};
		handleScroll();

		window.addEventListener('scroll', handleScroll);
		const header = document.querySelector('header');
		const main = document.querySelector('main');

		if (main && header)
			setShow(
				window.innerHeight <= main.offsetHeight + header.offsetHeight
			);
	}, []);

	return (
		<div
			className="fixed right-5 bottom-5 -z-50"
			style={{
				opacity: 1 - progress,
			}}
			ref={divRef}
		>
			{show && (
				<motion.div
					className="flex items-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
				>
					<motion.div
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
							width={25}
							height={25}
						/>
					</motion.div>
					<span>Scroll Down</span>
				</motion.div>
			)}
		</div>
	);
}

export default ScrollDown;
