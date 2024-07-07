'use client';
import React, { useEffect, useRef } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';

function Modal({
	children,
	title,
	open,
	onClose,
}: {
	children?: React.ReactNode;
	title: string;
	open: boolean;
	onClose?: () => void;
}) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const scale = useMotionValue(0);

	const close = async () => {
		await animate(scale, 0, { duration: 0.2 });

		dialogRef.current?.close();
		if (onClose) onClose();
	};

	useEffect(() => {
		if (open) {
			dialogRef.current?.showModal();

			animate(scale, 1, { duration: 0.2 });
		} else {
			close();
		}
	}, []);

	return (
		<motion.dialog
			className="relative rounded-lg min-h-20 min-w-40 p-8 bg-white backdrop:bg-black backdrop:opacity-40 focus:outline-none shadow-[2px_4px_7px_3px_rgb(0,0,0,0.5)]"
			style={{
				scale,
			}}
			ref={dialogRef || null}
		>
			<button
				className="absolute bg-black w-5 h-5 top-5 right-5 rounded-full focus:outline-none"
				onClick={() => close()}
			>
				<span className="absolute h-1 w-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white rotate-45" />
				<span className="absolute h-1 w-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white -rotate-45" />
			</button>
			<h1 className="font-medium text-lg">{title}</h1>
			<div className="w-full h-1 rounded-full bg-gray-200 mt-3 mb-5" />
			{children}
		</motion.dialog>
	);
}

export default Modal;
