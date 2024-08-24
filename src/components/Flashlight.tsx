'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStoreFlash from '@/stores/useStoreFlash';

function Flashlight() {
	const { mode, initX, initY, setMode } = useStoreFlash((state) => state);
	const divRef = useRef<HTMLDivElement>(null);
	const [show, setShow] = useState(false);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [scroll, setScroll] = useState(0);
	const width = 40;
	const height = 40;

	useEffect(() => {
		const enter = () => {
			setTimeout(() => {
				setShow(true);
			}, 150);
		};
		const leave = () => {
			setShow(false);
		};
		const handleMove = (e: MouseEvent) => {
			const mouseX = e.clientX;
			const mouseY = e.clientY;

			setTimeout(() => {
				setX(mouseX);
				setY(mouseY);
			}, 100);
		};
		const handleScroll = () => {
			setScroll(window.scrollY);
		};

		if (mode === 'on') {
			setScroll(window.scrollY);
			document.body.addEventListener('mouseenter', enter);
			document.body.addEventListener('mouseleave', leave);
			document.body.addEventListener('mousemove', handleMove);
			document.addEventListener('scroll', handleScroll);
			setX(initX);
			setY(initY);
			enter();
		}

		return () => {
			document.body.removeEventListener('mouseenter', enter);
			document.body.removeEventListener('mouseleave', leave);
			document.body.removeEventListener('mousemove', handleMove);
			document.removeEventListener('scroll', handleScroll);
		};
	}, [mode]);

	return (
		<AnimatePresence>
			{show && (
				<div
					className="absolute top-0 left-0 w-full h-full z-[10000] mix-blend-difference"
					onClick={() => {
						setMode('off');
						setShow(false);
					}}
				>
					<motion.div
						ref={divRef}
						className="absolute bg-white rounded-full"
						style={{
							left: x - width / 2,
							top: y + scroll - height / 2,
							width,
							height,
						}}
						initial={{
							scale: 0,
						}}
						animate={{
							scale: 1,
						}}
						exit={{
							scale: 0,
						}}
						transition={{
							duration: 0.3,
						}}
					/>
				</div>
			)}
		</AnimatePresence>
	);
}

export default Flashlight;
