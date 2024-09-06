'use client';

import React, { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import useStoreFlash from '@/stores/useStoreFlash';

function Switche() {
	const { mode, setMode } = useStoreFlash((state) => state);

	const handleClick = (e: MouseEvent) => {
		setMode(mode === 'on' ? 'off' : 'on')
	}

	return (
		<div
			className="border-2 border-black rounded-md h-11 w-11 max-md:h-9 max-md:w-9 px-[0.7rem] py-[0.35rem] cursor-pointer transition-all duration-300"
			style={{
				backgroundColor: mode === 'off' ? 'transparent' : 'black',
			}}
			onClick={handleClick}
		>
			<div
				className="flex flex-row w-full h-full px-[0.15rem] py-1 bg-white border-2 border-black rounded-sm"
				style={{
					alignItems: mode === 'off' ? 'flex-start' : 'flex-end',
				}}
			>
				<motion.span
					layout
					className="inline-block bg-black w-full h-[0.15rem] rounded-full"
					transition={{
						duration: 0.3,
					}}
				/>
			</div>
		</div>
	);
}

export default Switche;
