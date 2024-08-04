'use client';

import { useStoreBackground } from '@/stores/useStore';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Backgroud() {
	const XBackground = useStoreBackground((state) => state.XBackground);
	const divRef = useRef<HTMLDivElement>(null);
	const [axis, setAxis] = useState(0);

	useEffect(() => {
		const updateSize = () => {
			const screenWidth = window.screen.width;

			if (screenWidth > 768) {
				setAxis(0);
			} else {
				setAxis(1);
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
				axis === 0
					? {
							width:
								XBackground.at(-1) === '%'
									? XBackground
									: parseInt(XBackground),
							height: '100%',
					  }
					: {
							width: '100%',
							height:
								XBackground.at(-1) === '%'
									? XBackground
									: parseInt(XBackground),
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
