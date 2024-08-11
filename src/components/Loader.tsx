import React from 'react';
import { motion } from 'framer-motion';

function Loader({className}: {className?: string}) {
	return (
		<div className={`${className} flex justify-center items-center`}>
			<div className="relative flex gap-1">
				{Array.from({ length: 3 }, (v, i) => i).map((index) => (
					<motion.span
						key={index}
						className="inline-block h-3 w-3 rounded-full bg-black"
						animate={{
							y: [0, '-100%', 0],
						}}
						transition={{
							repeatDelay: 0.8,
							delay: index * 0.2,
							duration: 1,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
				))}
			</div>
		</div>
	);
}

export default Loader;
