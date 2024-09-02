'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TIME = 2500;

function Toast({
	notify,
	text,
	isOK,
	onClose,
}: {
	notify: boolean;
	text: string;
	isOK: boolean;
	onClose: () => void;
}) {
	useEffect(() => {
		if (notify) setTimeout(() => onClose(), TIME);
	}, [notify]);

	return (
		<motion.div
			className="fixed top-0 left-1/2 min-w-60 px-2 py-1 grid grid-cols-[auto_1fr] justify-center items-center bg-white shadow-[1px_1px_8px_rgba(0,0,0,0.25)] rounded-md select-none z-[10000]"
			initial={{
				x: '-50%',
				y: '-100%',
			}}
			animate={{
				x: '-50%',
				y: notify ? 10 : '-110%',
			}}
		>
			<div className="row-start-1 col-start-1 h-5 w-5 p-[0.3rem] justify-self-start flex justify-center items-center bg-black rounded-full">
				<div className="relative h-full w-full">
					{isOK ? (
						<Image
							src={'/icons/Check.svg'}
							alt="Check Image"
							className="filter invert"
							fill
						/>
					) : (
						<>
							<span className="absolute top-1/2 left-0 h-[0.2rem] w-full -translate-y-1/2 bg-white rounded-full rotate-45" />
							<span className="absolute top-1/2 left-0 h-[0.2rem] w-full -translate-y-1/2 bg-white rounded-full -rotate-45" />
						</>
					)}
				</div>
			</div>
			<span className="row-start-1 col-start-1 col-end-3 flex justify-center text-base">
				{text}
			</span>
		</motion.div>
	);
}

export default Toast;
