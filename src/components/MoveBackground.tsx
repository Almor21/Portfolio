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
	width?: string;
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
			if (!divRef.current.firstElementChild) return;

			if (axisBackground === 'x') {
				const rect =
					divRef.current.firstElementChild.getBoundingClientRect();
				const middle = (rect.left + rect.width).toString();
				setSizeBackground(middle);
			} else {
				let elm: HTMLElement = divRef.current.firstElementChild as HTMLElement;
				let dis = elm.offsetHeight;
				while (elm !== document.body) {
					if (!elm) break;

					dis += elm.offsetTop;
					elm = elm.parentElement as HTMLElement;
				}
				setSizeBackground(dis.toString());
			}
		} else {
			if (width) setSizeBackground(width);
		}
	}, [resize, width, axisBackground]);

	return createDiv ? (
		<div
			ref={divRef}
			className={`${className} grid`}
			style={
				axisBackground === 'x'
					? {
							gridAutoFlow: 'column'
					  }
					: {
							gridAutoFlow: 'row',
					  }
			}
		>
			{children}
		</div>
	) : (
		<>{children}</>
	);
}

export default MoveBackground;
