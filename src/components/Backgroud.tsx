'use client';

import React, { useEffect, useRef, useState } from 'react';
import useStoreBackground from '@/stores/useStoreBackground';
import { motion } from 'framer-motion';
import useScreenWidth from '@/hook/useScreenWidth';

function Backgroud() {
	const sizeBackground = useStoreBackground((state) => state.sizeBackground);
	const [axis, setAxis] = useStoreBackground((state) => [
		state.axis,
		state.setAxis,
	]);
	const divRef = useRef<HTMLDivElement>(null);
	const screenWidth = useScreenWidth();

	useEffect(() => {
		if (screenWidth > 768) {
			setAxis('x');
		} else {
			setAxis('y');
		}
	}, [screenWidth]);

	return (
		<motion.div
			className="absolute md:h-full max-md:w-full top-0 left-0 -z-[1000] bg-black"
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
