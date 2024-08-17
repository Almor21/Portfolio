'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
	AnimationPlaybackControls,
	motion,
	useAnimate,
	useMotionValue,
	useTransform,
} from 'framer-motion';
import Image from 'next/image';
import Loader from '../Loader';

function SendButton({ onActive }: { onActive: () => Promise<string> }) {
	const [rightLimit, setRightLimit] = useState(0);
	const btRef = useRef<HTMLDivElement>(null);

	let controls: AnimationPlaybackControls;
	let blockAnimations = false;

	const x = useMotionValue(0);
	const brightness = useTransform(x, [0, rightLimit], [0, 1]);
	const [scope, animate] = useAnimate();

	const handleDragEnd = () => {
		if (x.get() >= rightLimit - 10) {
			const run = async () => {
				if (!btRef.current?.parentElement?.offsetWidth) return;

				await animate(x, btRef.current?.parentElement?.offsetWidth);
				await animate('#text', { opacity: 0 });

				await animate('#loader', { opacity: 1 });
				const status = (await onActive()) === 'complete' ? 'check' : 'x';
				await animate('#loader', { opacity: 0 });

				await Promise.all([
					animate(`#${status}`, { opacity: 1 }, { duration: 0.1 }),
					animate(`#${status}_mask`, { scaleX: 0 }, { duration: 0.3 }),
				]);

				await new Promise((resolve) => setTimeout(resolve, 1000));

				await animate('#bt_mask', { opacity: 0 });

				x.set(-100);

				await Promise.all([
					animate(x, 0),
					animate('#text', { opacity: 1 }),
					animate(`#${status}`, { opacity: 0 }),
				]);

				await Promise.all([
					animate(`#${status}_mask`, { scaleX: 1 }),
					animate('#bt_mask', { opacity: 1 }),
				]);
				blockAnimations = false;
			};
			run();
		} else {
			animate(x, 0);
			blockAnimations = false;
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
					controls = animate(x, [0, 3, 0, 3, 0], {
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
				id="loader"
				className="absolute h-6 w-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				style={{ opacity: 0 }}
			>
				<Loader className='h-full' size={1} />
			</div>
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
			<div
				id="x"
				className="absolute h-6 w-6 flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				style={{ opacity: 0 }}
			>
				<span className="absolute h-1 w-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black rotate-45" />
				<span className="absolute h-1 w-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black -rotate-45" />
				<div
					id="x_mask"
					className="absolute h-full w-full top-0 left-0 bg-white origin-right"
				/>
			</div>
			<div className="absolute h-full w-full top-0 left-0 overflow-hidden">
				<motion.div
					className="absolute top-0 left-0 w-12 h-12 cursor-pointer z-20"
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
					onDragStart={() => {
						blockAnimations = true;
						if (controls) controls.stop();
					}}
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
