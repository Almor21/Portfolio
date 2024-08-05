'use client';

import React, { useEffect, useState } from 'react';
import { AnimationPlaybackControls, motion, useAnimate } from 'framer-motion';

function MenuButton({ className, onActive, onDeactive }: { className?: string, onActive?: () => void, onDeactive?: () => void }) {
	const [active, setActive] = useState(false);
	const [scope, animate] = useAnimate();

	useEffect(() => {
		let controls: AnimationPlaybackControls[];

		if (!active) {
			if (onActive) onActive()
			
			controls = [
				animate(':first-child', { y: 0 }, { type: 'spring', duration: 0.2 }),
				animate(':last-child', { y: 0 }, { type: 'spring', duration: 0.2 }),
				animate(':first-child', { rotate: 45 }, { type: 'spring', duration: 0.4, delay: 0.2 }),
				animate(
					':not(:first-child):not(:last-child)',
					{ opacity: 0 },
					{ duration: 0.2, delay: 0.2 }
				),
				animate(
					':last-child',
					{ rotate: -45 },
					{ type: 'spring', duration: 0.4, delay: 0.2 }
				),
			];
		} else {
			if (onDeactive) onDeactive()

			controls = [
				animate(':first-child', { rotate: 0 }, { type: 'spring', duration: 0.2 }),
				animate(
					':not(:first-child):not(:last-child)',
					{ opacity: 1 },
					{ duration: 0.2 }
				),
				animate(':last-child', { rotate: 0 }, { type: 'spring', duration: 0.2 }),
				animate(
					':first-child',
					{ y: -10 },
					{ type: 'spring', duration: 0.2, delay: 0.2 }
				),
				animate(
					':last-child',
					{ y: 10 },
					{ type: 'spring', duration: 0.2, delay: 0.2 }
				),
			];
		}

		return () => {
			if (controls) controls.forEach((c) => c.stop());
		};
	}, [active]);

	return (
		<div
			ref={scope}
			className={`${className} relative w-9 flex`}
			onClick={() => setActive(!active)}
		>
			<motion.span
				className="absolute inline-block w-full h-[0.35rem] bg-white rounded-full"
				style={{
					y: -10,
				}}
			/>
			<span className="inline-block w-full h-[0.35rem] bg-white rounded-full" />
			<motion.span
				className="absolute inline-block w-full h-[0.35rem] bg-white rounded-full"
				style={{
					y: 10,
				}}
			/>
		</div>
	);
}

export default MenuButton;
