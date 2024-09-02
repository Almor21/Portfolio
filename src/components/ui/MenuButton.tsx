'use client';

import React, { useEffect } from 'react';
import { AnimationPlaybackControls, motion, useAnimate } from 'framer-motion';

function MenuButton({
	className,
	value,
	onChange,
}: {
	className?: string;
	value: boolean;
	onChange?: (v: boolean) => void;
}) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		let controls: AnimationPlaybackControls[];

		if (value) {
			controls = [
				animate(':first-child', { y: 0 }, { duration: 0.2 }),
				animate(':last-child', { y: 0 }, { duration: 0.2 }),
				animate(
					':first-child',
					{ rotate: 45 },
					{
						duration: 0.5,
						delay: 0.2,
						type: 'spring',
						bounce: 0.5,
					}
				),
				animate(
					':not(:first-child):not(:last-child)',
					{ opacity: 0 },
					{ duration: 0.2, delay: 0.2 }
				),
				animate(
					':last-child',
					{ rotate: -45 },
					{
						duration: 0.5,
						delay: 0.2,
						type: 'spring',
						bounce: 0.5,
					}
				),
			];
		} else {
			controls = [
				animate(':first-child', { rotate: 0 }, { duration: 0.2 }),
				animate(
					':not(:first-child):not(:last-child)',
					{ opacity: 1 },
					{ duration: 0.2 }
				),
				animate(':last-child', { rotate: 0 }, { duration: 0.2 }),
				animate(
					':first-child',
					{ y: -10 },
					{
						duration: 0.5,
						delay: 0.2,
						type: 'spring',
						bounce: 0.5,
					}
				),
				animate(
					':last-child',
					{ y: 10 },
					{
						duration: 0.5,
						delay: 0.2,
						type: 'spring',
						bounce: 0.5,
					}
				),
			];
		}

		return () => {
			if (controls) controls.forEach((c) => c.stop());
		};
	}, [value]);

	return (
		<div
			ref={scope}
			className={`${className} relative w-8 h-8 flex items-center cursor-pointer`}
			onClick={() => {
				if (onChange) onChange(!value);
			}}
		>
			<motion.span
				className="absolute inline-block w-full h-[0.3rem] bg-white rounded-full"
				style={{
					y: -10,
				}}
			/>
			<span className="inline-block w-full h-[0.3rem] bg-white rounded-full" />
			<motion.span
				className="absolute inline-block w-full h-[0.3rem] bg-white rounded-full"
				style={{
					y: 10,
				}}
			/>
		</div>
	);
}

export default MenuButton;
