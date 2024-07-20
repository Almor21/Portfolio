'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useStoreBackground } from '@/stores/useStore';

function MoveBackground({
	children,
	createDiv = false,
	className,
	width,
}: {
	children: React.ReactNode;
	createDiv?: boolean;
	className?: string;
	width: string;
}) {
	const setXBackground = useStoreBackground((state) => state.setXBackground);
	const divRef = useRef<HTMLDivElement>(null);
	const [resize, setResize] = useState(false);

	useEffect(() => {
		if (createDiv) {
			const resizeEvent = () => {
				setResize((prevState) => !prevState);
			};
			window.addEventListener('resize', resizeEvent);

			return () => {
				window.removeEventListener('resize', resizeEvent);
			};
		}
	}, []);

	useEffect(() => {
		if (createDiv) {
			if (!divRef.current) return;

			const rect = divRef.current.getBoundingClientRect();
			const middle = (
				rect.left +
				rect.width * (parseInt(width) / 100)
			).toString();
			setXBackground(middle);
		} else {
			setXBackground(width);
		}
	}, [resize, width]);

	return createDiv ? (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `${width} ${100 - parseInt(width)}%`,
			}}
			className={className}
			ref={divRef}
		>
			{children}
		</div>
	) : (
		<>{children}</>
	);
}

export default MoveBackground;
