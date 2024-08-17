import React from 'react';
import { motion } from 'framer-motion';

function Loader({ className, size = 2 }: { className?: string, size?: number }) {
	let realSize = '0';
	switch (size) {
		case 1:
			realSize = '0.5rem'
			break;
		case 2:
			realSize = '0.75rem'
			break;
	}

	return (
		<div className={`${className} flex justify-center items-center`}>
			<div className="relative flex gap-1">
				{Array.from({ length: 3 }, (v, i) => i).map((index) => (
					<motion.span
						key={index}
						className="inline-block rounded-full bg-black"
						style={{
							height: realSize,
							width: realSize
						}}
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
