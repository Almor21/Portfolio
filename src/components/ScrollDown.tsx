'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function ScrollDown() {
	return (
		<div className="absolute right-5 bottom-5 flex items-center">
            <motion.div
				animate={{
					y: [0,-5, 0, 5, 0, -5, 0, 5, 0],
				}}
                transition={{
                    delay: 5,
                    duration: 0.7,
                    repeat: Infinity,
                    repeatDelay: 10,
                    ease: 'easeInOut'
                }}
			>
				<Image
					src="/icons/ArrowDown.svg"
					alt="Arrow Down Icon"
					width={25}
					height={25}
				/>
			</motion.div>
			<span>Scroll Down</span>
		</div>
	);
}

export default ScrollDown;
