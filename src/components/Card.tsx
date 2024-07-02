'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import TypeWriter from './TypeWriter';
import { motion } from 'framer-motion';
import { useStoreBackground } from '@/stores/useStore';

function Card() {
	const imageRef = useRef<HTMLImageElement>(null);
	const [resize, setResize] = useState(false);
	const XBackground = useStoreBackground((state) => state.XBackground);
	const setXBackground = useStoreBackground((state) => state.setXBackground);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setResize((prevState) => !prevState);
		});
	}, []);

	useEffect(() => {
		if (!imageRef.current) return;

		const rect = imageRef.current.getBoundingClientRect();
		const x = rect.left + rect.width / 2;

		console.log(x);
		if (x != XBackground) {
			setXBackground(x);
		}
	}, [resize]);

	return (
		<div className="absolute grid grid-cols-[repeat(2,auto)] items-center gap-4 top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2">
			<motion.div
				className="relative h-[40vh] w-[40vh] box-border rounded-full overflow-hidden rotate-45 shadow-[2px_2px_8px_2px_rgb(0,0,0,0.5)]"
				style={{
					borderColor: 'black black white white',
				}}
				animate={{
					borderWidth: 3,
				}}
				transition={{
					duration: 0.3,
					delay: 1,
					ease: 'easeOut'
				}}
			>
				<Image
					src="/VoidPhoto.jpeg"
					alt="Profile image"
					fill={true}
					className="-rotate-45"
					ref={imageRef || null}
				/>
			</motion.div>
			<div className="relative grid grid-rows-[repeat(2,1fr)]">
				<Image
					src={'/Presentation.svg'}
					alt="Presentation"
					className='h-auto w-48'
					width={0}
					height={0}
				/>
				<TypeWriter />
				<p className='text-sm h-fit'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolore quis id corrupti, aliquam voluptatem fuga, ea suscipit sed maxime cumque doloremque inventore blanditiis non asperiores!</p>
			</div>
		</div>
	);
}

export default Card;
