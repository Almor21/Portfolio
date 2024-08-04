'use client';
import {
	AnimationPlaybackControls,
	useAnimate,
} from 'framer-motion';

import React, { useEffect, useState } from 'react';

function CVButton() {
	const [scope, animate] = useAnimate();
	const [hover, setHover] = useState(false);

	useEffect(() => {
		let controls: Array<AnimationPlaybackControls>;

		if (hover) {
			controls = [
				animate(
					'#span_left, #span_right',
					{
						scaleX: 0,
					},
					{
						duration: 0.3,
						ease: 'easeOut',
					}
				),
				animate(
					'#span_background',
					{
						backgroundColor: 'rgb(0,0,0)',
					},
					{
						duration: 0.2,
						ease: 'easeOut',
						delay: 0.6,
					}
				),
				animate(
					'#span_text',
					{
						color: 'rgb(255,255,255)',
					},
					{
						duration: 0.2,
						ease: 'easeOut',
						delay: 0.6,
					}
				),
			];
		} else {
			controls = [
				animate('#span_left, #span_right', {
					scaleX: 1,
				}),
				animate('#span_background', {
					backgroundColor: 'rgb(255,255,255)',
				}),
				animate('#span_text', {
					color: 'rgb(0,0,0)',
				}),
			];
		}

		return () => {
			if (controls) controls.forEach((a) => a.stop());
		};
	}, [hover]);

	return (
		<button
			className="relative w-32 h-9 flex justify-center items-center rounded-full"
			ref={scope}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<span
				id="span_left"
				style={{
					transformOrigin: 'right',
				}}
				className="absolute top-0 left-0 z-10 w-[50%] h-full bg-white"
			/>
			<span
				id="span_background"
				className="absolute top-0 w-full h-full border-2 border-black rounded-full"
			/>
			<span id="span_text" className="relative z-20">
				Download CV
			</span>
			<span
				id="span_right"
				className="absolute top-0 right-0 z-10 w-[50%] h-full bg-white"
				style={{
					transformOrigin: 'left',
				}}
			/>
		</button>
	);
}

export default CVButton;
