'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimate } from 'framer-motion';
import useIsTouchDevice from '@/hook/useIsTouchDevice';
import Link from 'next/link';
import { SOCIAL } from '@/config/contactInfo';
import useNotify from '@/hook/useNotify';

function Links() {
	const [scope, animate] = useAnimate();
	const [hover, setHover] = useState(-1);
	const [enterView, setEnterView] = useState(false);
	const [colorImage1, setColorImage1] = useState(false);
	const [colorImage2, setColorImage2] = useState(false);
	const isTouch = useIsTouchDevice();
	const notify = useNotify();

	const runAnimation = (
		num: number,
		type: 'active' | 'noactive',
		delay: number = 0
	) => {
		if (type === 'active') {
			let color = '';
			switch (num) {
				case 0:
					color = '0,0,0';
					break;
				case 1:
					color = '255,0,0';
					break;
				case 2:
					color = '0,0,255';
					break;
			}

			animate(
				`#div${num}`,
				{
					backgroundColor: `rgba(${color},0.08)`,
					borderColor: `rgba(${color},0.1)`,
					boxShadow: `0 0 10px 5px rgba(${color},0.08)`,
				},
				{ delay }
			);
			animate(`#div${num} .image`, { y: -3 }, { delay });
			animate(`#div${num} .mask`, { scaleX: 0 }, { delay });
			setTimeout(() => {
				if (num === 1) {
					setColorImage1(true);
				} else if (num === 2) {
					setColorImage2(true);
				}
			}, delay * 1000);
		} else if (type === 'noactive') {
			animate(
				`#div${num}`,
				{
					backgroundColor: `rgba(255,255,255,0)`,
					borderColor: `rgba(0,0,0,0.3)`,
					boxShadow: `none`,
				},
				{ delay }
			);
			animate(`#div${num} .image`, { y: 0 }, { delay });
			animate(`#div${num} .mask`, { scaleX: 1 }, { delay });
			setTimeout(() => {
				if (num === 1) {
					setColorImage1(false);
				} else if (num === 2) {
					setColorImage2(false);
				}
			}, delay * 1000);
		}
	};

	useEffect(() => {
		if (hover === -1) return;

		runAnimation(hover, 'active');

		return () => {
			runAnimation(hover, 'noactive');
		};
	}, [hover]);

	useEffect(() => {
		if (enterView) {
			for (let i = 0; i <= 2; i++) {
				runAnimation(i, 'active', 0.5 + i * 0.2);
			}
		} else {
			for (let i = 0; i <= 2; i++) {
				runAnimation(i, 'noactive');
			}
		}
	}, [enterView]);

	useEffect(() => {
		setHover(-1);
		setEnterView(false);
	}, [isTouch]);

	return (
		<motion.div
			ref={scope}
			className="relative flex px-5 justify-between items-center"
			onViewportEnter={() => {
				if (isTouch) setEnterView(true);
			}}
			onViewportLeave={() => {
				setEnterView(false);
			}}
		>
			<Link
				href={SOCIAL.github}
				target="_blank"
				id="div0"
				className="inline-block h-14 w-14 p-2 backdrop-blur-sm border border-[rgba(0,0,0,0.3)] shadow-none rounded"
				onMouseEnter={() => {
					if (!isTouch) setHover(0);
				}}
				onMouseLeave={() => setHover(-1)}
			>
				<div className="image relative h-full w-full z-10">
					<Image src={'/icons/Github.svg'} alt="i" fill />
				</div>
				<div className="absolute top-[105%] left-1/2 -translate-x-1/2">
					<span className="relative z-0">Github</span>
					<span className="mask absolute inline-block top-0 left-0 bg-white z-10 h-full w-full origin-right" />
				</div>
			</Link>
			<button
				id="div1"
				className="relative h-14 w-14 p-2 backdrop-blur-sm border border-[rgba(0,0,0,0.3)] shadow-none rounded cursor-pointer"
				onClick={async () => {
					try {
						await navigator.clipboard.writeText(SOCIAL.gmail);

						notify('Copied!', 'OK');
					} catch (error) {
						notify('Something went wrong!', 'FAIL');
						console.error('Error:', error);
					}
				}}
				onMouseEnter={() => {
					if (!isTouch) setHover(1);
				}}
				onMouseLeave={() => setHover(-1)}
			>
				<div className="image relative h-full w-full">
					<Image
						className="transition-all duration-200"
						src={'/icons/Mail.svg'}
						alt="i"
						fill
						style={
							colorImage1
								? {
										filter: 'invert(66%) sepia(16%) saturate(5848%) hue-rotate(316deg) brightness(100%) contrast(93%)',
								  }
								: {}
						}
					/>
				</div>
				<div className="absolute top-[105%] left-1/2 -translate-x-1/2">
					<span className="relative z-0 text-red-400">Gmail</span>
					<span className="mask absolute inline-block top-0 left-0 bg-white z-10 h-full w-full origin-right" />
				</div>
			</button>
			<Link
				href={SOCIAL.linkedin}
				target="_blank"
				id="div2"
				className="h-14 w-14 p-2 backdrop-blur-sm border border-[rgba(0,0,0,0.3)] shadow-none rounded cursor-pointer"
				onMouseEnter={() => {
					if (!isTouch) setHover(2);
				}}
				onMouseLeave={() => setHover(-1)}
			>
				<div className="image relative h-full w-full">
					<Image
						className="transition-all duration-200"
						src={'/icons/Linkedin.svg'}
						alt="i"
						fill
						style={
							colorImage2
								? {
										filter: 'invert(59%) sepia(78%) saturate(1022%) hue-rotate(187deg) brightness(95%) contrast(108%)',
								  }
								: {}
						}
					/>
				</div>
				<div className="absolute top-[105%] left-1/2 -translate-x-1/2">
					<span className="relative z-0 text-blue-400">Linkedin</span>
					<span className="mask absolute inline-block top-0 left-0 bg-white z-10 h-full w-full origin-right" />
				</div>
			</Link>
		</motion.div>
	);
}

export default Links;
