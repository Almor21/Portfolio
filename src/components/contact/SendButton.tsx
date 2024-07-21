'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
	AnimationPlaybackControls,
	delay,
	motion,
	useAnimate,
	useMotionValue,
	useMotionValueEvent,
	useTransform,
} from 'framer-motion';
import Image from 'next/image';

function SendButton() {
	console.log('rendeer');
	const [rightLimit, setRightLimit] = useState(0);
	const btRef = useRef<HTMLDivElement>(null);

	let controls: AnimationPlaybackControls;
	let blockAnimations = false;

	const x = useMotionValue(0);
	const [scope, animate] = useAnimate();
	const brightness = useTransform(x, [0, rightLimit], [0, 1]);

	const handleDragEnd = () => {
		if (x.get() >= rightLimit - 10) {
			blockAnimations = true;
			const run = async () => {
				if (!btRef.current?.parentElement?.offsetWidth) return;

				await animate(x, btRef.current?.parentElement?.offsetWidth);
				await animate('#text', { opacity: 0 });
				await Promise.all([
					animate('#check', { opacity: 1 }, { duration: 0.1 }),
					animate('#check_mask', { scaleX: 0 }, { duration: 0.3 }),
				]);

				await new Promise((resolve) => setTimeout(resolve, 1000));

				await animate('#bt_mask', { opacity: 0 });

				x.set(-100);

				await Promise.all([
					animate(x, 0),
					animate('#text', { opacity: 1 }),
					animate('#check', { opacity: 0 }),
				]);

				await Promise.all([
					animate('#check_mask', { scaleX: 1 }),
					animate('#bt_mask', { opacity: 1 }),
				]);
				blockAnimations = false;
			};
			run();
		} else {
			animate(x, 0);
		}
	};

	useEffect(() => {
		if (btRef.current && btRef.current.parentElement)
			setRightLimit(
				btRef.current?.parentElement?.offsetWidth -
					btRef.current?.offsetWidth
			);
	}, []);

	return (
		<div
			className="relative w-52 h-12 box-content border-2 border-white flex justify-center items-center"
			ref={scope}
			onMouseEnter={() => {
				if (!blockAnimations) {
					controls = animate(x, [0, 2, 0, 2, 0], {
						repeat: Infinity,
						delay: 1,
						duration: 0.6,
						repeatDelay: 2,
					});
				}
			}}
			onMouseLeave={() => {
				if (controls && !blockAnimations) {
					controls.stop();
					x.set(0);
				}
			}}
		>
			<motion.div
				className="absolute h-full w-full top-0 left-0 shadow-[0_0_10px_4px_rgba(255,255,255,0.5)]"
				style={{
					opacity: brightness,
				}}
			/>
			<motion.div
				id="bt_mask"
				className="absolute top-0 left-0 h-12 w-12 bg-white"
				style={{
					width: x,
				}}
			/>
			<span
				id="text"
				className="relative inline-block text-white z-10 mix-blend-difference select-none"
				style={{
					opacity: 1,
				}}
			>
				Send
			</span>
			<div
				id="check"
				className="absolute h-6 w-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				style={{ opacity: 0 }}
			>
				<Image src={'/icons/Check.svg'} alt="Check Image" fill={true} />
				<div
					id="check_mask"
					className="absolute h-full w-full top-0 left-0 bg-white origin-right"
				/>
			</div>
			<div className="absolute h-full w-full top-0 left-0 overflow-hidden">
				<motion.div
					className="absolute top-0 left-0 w-12 h-12 cursor-pointer z-50"
					style={{
						x,
					}}
					ref={btRef}
					drag={'x'}
					dragConstraints={{
						left: 0,
						right: rightLimit,
					}}
					dragElastic={0}
					dragMomentum={false}
					onDragEnter={() => controls.stop()}
					onDragEnd={handleDragEnd}
				>
					<span className="inline-flex h-full w-full text-2xl items-center justify-center bg-white">
						&#8811;
					</span>
				</motion.div>
			</div>
		</div>
	);
}

export default SendButton;
