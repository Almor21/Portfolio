'use client';

import { useStoreBackground } from '@/stores/useStore';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

function Backgroud() {
	const XBackground = useStoreBackground((state) => state.XBackground);
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<motion.div
			className="absolute bg-black h-full top-0 -z-50"
			ref={divRef}
			initial={{
				width: 0,
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
