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
	const [resize, setResize] = useState(false);
	const setSizeBackground = useStoreBackground(
		(state) => state.setSizeBackground
	);
	const axisBackground = useStoreBackground((state) => state.axis);
	const divRef = useRef<HTMLDivElement>(null);

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

			if (axisBackground === 'x') {
				const rect = divRef.current.getBoundingClientRect();
				const middle = (
					rect.left +
					rect.width * (parseInt(width) / 100)
				).toString();
				setSizeBackground(middle);
			} else {
				let elm: HTMLElement | null = divRef.current;
				let dis = elm.offsetHeight / 2;
				while (elm !== document.body) {
					if (!elm) break;

					dis += elm.offsetTop;
					elm = elm.parentElement;
				}
				setSizeBackground(dis.toString());
			}
		} else {
			setSizeBackground(width);
		}
	}, [resize, width, axisBackground]);

	return createDiv ? (
		<div
			ref={divRef}
			className={`${className} grid`}
			style={axisBackground === 'x' ? {
				gridTemplateColumns: `${width} ${100 - parseInt(width)}%`,
			} : {
				gridAutoFlow: 'row'
			}}
		>
			{children}
		</div>
	) : (
		<>{children}</>
	);
}

export default MoveBackground;
