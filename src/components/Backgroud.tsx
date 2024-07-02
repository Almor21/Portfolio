'use client';

import { useStoreBackground } from '@/stores/useStore';
import React from 'react';
import { motion } from 'framer-motion';

function Backgroud() {
	const XBackground = useStoreBackground((state) => state.XBackground);
	return (
		<motion.div
			className="bg-black h-full row-span-1 col-start-1 -z-50"
			initial={{
				width:0
			}}
			animate={{
				width: XBackground,
			}}
			transition={{
				type: 'spring',
				duration: 0.8,
			}}
		></motion.div>
	);
}

export default Backgroud;
