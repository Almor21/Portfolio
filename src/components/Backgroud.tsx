'use client';

import { useStoreBackground } from '@/stores/useStore';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Backgroud() {
	const XBackground = useStoreBackground((state) => state.XBackground);
	const divRef = useRef<HTMLDivElement>(null);
	const widthRef = useRef(0);

	useEffect(() => {
		const screenWidth = window.screen.width;
		const excess = screenWidth - 1440 > 0 ? screenWidth - 1440 : 0;
		widthRef.current = (excess) / 2;
	}, []);

	return (
		<motion.div
			className="absolute h-full top-0 left-0 -z-50 bg-black"
			ref={divRef}
			initial={{
				width: widthRef.current,
			}}
			animate={{
				width:
					XBackground.at(-1) === '%'
						? XBackground
						: parseInt(XBackground) -
						  (divRef.current?.getBoundingClientRect().left ?? 0),
			}}
			transition={{
				type: 'spring',
				duration: 0.8,
			}}
		/>
	);
}

export default Backgroud;
