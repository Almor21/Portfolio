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
			initial={{ x: -10, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{
				delay: 0.3,
				duration: 0.4,
			}}
		>
			{children}
		</motion.div>
	);
}

export default DivTransition;
