'use client';

import React from 'react';
import { motion } from 'framer-motion';

function DivTransition({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			className={`${className} relative`}
			initial={{
				opacity: 0,
			}}
			animate={{ x: [0, -10, 0], opacity: [0, 0, 1] }}
			transition={{
				delay: 0.3,
				duration: 0.4,
				times:[0,0.1,1],
			}}
		>
			{children}
		</motion.div>
	);
}

export default DivTransition;
