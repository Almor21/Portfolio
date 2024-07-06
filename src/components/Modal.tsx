'use client';
import React, { useEffect, useRef } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';

function Modal({
	children,
	open,
	onClose,
}: {
	children?: React.ReactNode;
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
	}, [open]);

	return (
		<motion.dialog
			className="relative h-80 w-80 rounded-xl bg-white backdrop:bg-black backdrop:opacity-40 focus:outline-none"
			style={{
				scale,
			}}
			ref={dialogRef || null}
		>
			<button
				className="absolute bg-black w-3 h-3 top-5 right-5 focus:outline-none"
				onClick={() => close()}
			/>
			{children}
		</motion.dialog>
	);
}

export default Modal;
