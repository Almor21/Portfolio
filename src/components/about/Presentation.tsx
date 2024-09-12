'use client';

import React, { useEffect, useReducer, useRef, useState } from 'react';
import Image from 'next/image';
import useIsTouchDevice from '@/hook/useIsTouchDevice';
import { motion } from 'framer-motion';
import useScreenHeight from '@/hook/useScreenHeight';

function Presentation() {
	const isTouch = useIsTouchDevice();
	const screenHeight = useScreenHeight();
	const [animation, setAnimation] = useState(-1);
	const divRefs = useRef<Array<HTMLDivElement | null>>([
		null,
		null,
		null,
		null,
	]);

	useEffect(() => {
		setAnimation(-1);
		if (!isTouch) return;

		const handleScroll = () => {
			let comp = -1;
			const lineScreen = screenHeight / 2.8;
			let lineFirstElm = 0;
			let dif = 0;
			let line = 0;

			/* Calculate if half the screen is above the first element */

			// Calculate the difference between the lines
			if (divRefs.current[0]) {
				// Get the distance between the first elemnt and bigining of the html
				let elm: HTMLElement | null = divRefs.current[0];
				lineFirstElm = elm.offsetTop + elm.offsetHeight / 2;
				while (elm !== document.body) {
					if (!elm) break;

					lineFirstElm += elm.offsetTop;
					elm = elm.parentElement;
				}

				dif = lineScreen - lineFirstElm;
			}

			// If the line is below the first element, the line has to re-calculate it
			// above the first element
			if (dif > 0) {
				let scrollY = window.scrollY;
				if (scrollY > dif) scrollY = dif;

				line = lineFirstElm + scrollY;
			} else {
				line = lineScreen;
			}

			divRefs.current.forEach((elm, index) => {
				if (!elm) return;

				const rect = elm.getBoundingClientRect();
				const top =
					divRefs.current[0] === elm
						? lineFirstElm - window.scrollY
						: rect.top;
				const height = elm.offsetHeight;

				if (top <= line && line < top + height) {
					comp = index;
				}
			});

			setAnimation(comp);
		};
		handleScroll();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isTouch]);

	return (
		<div className="relative justify-self-end md:px-24 max-md:pb-8 flex flex-col gap-6 items-center text-white">
			<motion.div
				ref={(elm) => {
					if (divRefs.current) divRefs.current[0] = elm;
				}}
				className="relative p-1 border-2 border-[white_transparent_white_white] rounded-full"
				onMouseEnter={() => {
					if (!isTouch) setAnimation(0);
				}}
				onMouseLeave={() => {
					if (!isTouch) setAnimation(-1);
				}}
				animate={
					animation === 0
						? {
								rotate: -180,
						  }
						: {}
				}
				transition={{
					type: 'tween',
				}}
			>
				<motion.div
					className="p-1 border-2 border-[white_white_white_transparent] rounded-full overflow-hidden"
					animate={
						animation === 0
							? {
									rotate: 360,
							  }
							: {}
					}
					transition={{
						type: 'tween',
					}}
				>
					<motion.div
						className="relative h-40 w-40 filter grayscale"
						animate={
							animation === 0
								? {
										rotate: -180,
										filter: 'grayscale(0)',
								  }
								: {}
						}
						transition={{
							type: 'tween',
						}}
					>
						<Image
							src={'/Profile2.jpg'}
							alt="Profile image"
							fill={true}
							sizes="(max-width: 768px) 100vw, 33vw"
							className="rounded-full"
						/>
					</motion.div>
				</motion.div>
			</motion.div>
			<div className="text-justify flex flex-col gap-4">
				<div
					ref={(elm) => {
						if (divRefs.current) divRefs.current[1] = elm;
					}}
					className="relative"
					onMouseEnter={() => {
						if (!isTouch) setAnimation(1);
					}}
					onMouseLeave={() => {
						if (!isTouch) setAnimation(-1);
					}}
				>
					<motion.div
						className="absolute left-0 top-0 bg-white h-full w-1 transition-all duration-[400ms] ease-out"
						animate={
							animation === 1
								? {
										width: '1rem',
								  }
								: {}
						}
					/>
					<p className="px-5 md:pr-16">
						Edinson Noriega, I am 20 years old and I am a{' '}
						<span className="font-bold">self-taught</span>,
						<span className="font-bold"> active</span> and{' '}
						<span className="font-bold">creative</span> person. I
						enjoy learning and exploring new skills constantly.
					</p>
				</div>
				<div
					ref={(elm) => {
						if (divRefs.current) divRefs.current[2] = elm;
					}}
					className="relative"
					onMouseEnter={() => {
						if (!isTouch) setAnimation(2);
					}}
					onMouseLeave={() => {
						if (!isTouch) setAnimation(-1);
					}}
				>
					<motion.div
						className="absolute right-0 max-md:left-0 top-0 bg-white h-full w-1 transition-all duration-[400ms] ease-out"
						animate={
							animation === 2
								? {
										width: '1rem',
								  }
								: {}
						}
					/>
					<p className="px-5 md:pl-16">
						<span className="font-bold">Since I was a child</span>,
						I have been fascinated by the world of programming. This
						passion has driven me to continuously{' '}
						<span className="font-bold">improve</span> and{' '}
						<span className="font-bold">expand my skills</span>.
					</p>
				</div>
				<div
					ref={(elm) => {
						if (divRefs.current) divRefs.current[3] = elm;
					}}
					className="relative"
					onMouseEnter={() => {
						if (!isTouch) setAnimation(3);
					}}
					onMouseLeave={() => {
						if (!isTouch) setAnimation(-1);
					}}
				>
					<motion.div
						className="absolute left-0 top-0 bg-white h-full w-1 transition-all duration-[400ms] ease-out"
						animate={
							animation === 3
								? {
										width: '1rem',
								  }
								: {}
						}
					/>
					<p className="px-5 md:pr-16">
						Currently, I am a{' '}
						<span className="font-bold">Systems Engineering</span>{' '}
						student with focus on{' '}
						<span className="font-bold">web development</span>,
						in the process of becoming a Fullstack developer. I have
						solid knowledge in both{' '}
						<span className="font-bold">Frontend</span> and{' '}
						<span className="font-bold">Backend</span>, although
						I&apos;m more inclined towards frontend.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Presentation;
