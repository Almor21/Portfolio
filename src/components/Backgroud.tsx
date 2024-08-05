'use client';

import { useStoreBackground } from '@/stores/useStore';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Backgroud() {
	const sizeBackground = useStoreBackground((state) => state.sizeBackground);
	const [axis, setAxis] = useStoreBackground((state) => [
		state.axis,
		state.setAxis,
	]);
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const updateSize = () => {
			const screenWidth = window.screen.width;

			if (screenWidth > 768) {
				setAxis('x');
			} else {
				setAxis('y');
			}

		};
		updateSize();

		window.addEventListener('resize', updateSize);

		return () => {
			window.removeEventListener('resize', updateSize);
		};
	}, []);

	return (
		<motion.div
			className="absolute md:h-full max-md:w-full top-0 left-0 -z-50 bg-black"
			ref={divRef}
			animate={
				axis === 'x'
					? {
							width:
								sizeBackground.at(-1) === '%'
									? sizeBackground
									: parseInt(sizeBackground),
							height: '100%',
					  }
					: {
							width: '100%',
							height:
								sizeBackground.at(-1) === '%'
									? sizeBackground
									: parseInt(sizeBackground),
					  }
			}
			transition={{
				type: 'spring',
				duration: 0.8,
			}}
		/>
	);
}

export default Backgroud;
