'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import useStoreFlash from '@/stores/useStoreFlash';
import useIsTouchDevice from '@/hook/useIsTouchDevice';

function Flashlight() {
	const isTouch = useIsTouchDevice();

	const mode = useStoreFlash((state) => state.mode);
	const divRef = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState(false);
	const [show, setShow] = useState(false);
	const mouse = useRef({
		x: 0,
		y: 0,
	});
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const width = 40;
	const height = 40;

	useEffect(() => {
		const enter = () => {
			setShow(true);
		};
		const leave = () => {
			setShow(false);
		};
		const updatePosition = () => {
			const parent = divRef.current?.parentElement;
			if (!parent) return;

			const parentTop = parent.getBoundingClientRect().top;
			const parentLeft = parent.getBoundingClientRect().left;

			x.set(mouse.current.x - parentLeft - width / 2);
			y.set(mouse.current.y - parentTop - height / 2);
		};
		const handleMove = (e: MouseEvent) => {
			setTimeout(() => {
				mouse.current = {
					x: e.clientX,
					y: e.clientY,
				};
				updatePosition();
			}, 100);
		};
		const handleScroll = () => {
			updatePosition();
		};

		if (mode === 'on') {
			const main = document.querySelector('main');
			if (!main) return;

			main.addEventListener('mouseenter', enter);
			main.addEventListener('mouseleave', leave);
			main.addEventListener('mousemove', handleMove);
			document.addEventListener('scroll', handleScroll);
			setActive(true);
		} else {
			setActive(false);
		}

		return () => {
			const main = document.querySelector('main');
			if (!main) return;

			main.removeEventListener('mouseenter', enter);
			main.removeEventListener('mouseleave', leave);
			main.removeEventListener('mousemove', handleMove);
			document.removeEventListener('scroll', handleScroll);
		};
	}, [mode]);

	return (
		active && !isTouch && (
			<motion.div
				ref={divRef}
				className="absolute bg-white rounded-full z-10 mix-blend-difference"
				style={{
					left: x,
					top: y,
					width,
					height,
				}}
				initial={{
					scale: 0,
				}}
				animate={
					show
						? {
								scale: 1,
								transition: {
									duration: 0.3,
									delay: 0.1
								},
						  }
						: {
								scale: 0,
								transition: {
									duration: 0.3,
								},
						  }
				}
			/>
		)
	);
}

export default Flashlight;
