'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import TypeWriter from './TypeWriter';
import MoveBackground from '../MoveBackground';
import useStoreBackground from '@/stores/useStoreBackground';

function Card() {
	const imageRef = useRef<HTMLImageElement>(null);
	const axisBackground = useStoreBackground((state) => state.axis);
	const [resize, setResize] = useState(false);
	const [middle, setMiddle] = useState('');

	useEffect(() => {
		const resizeEvent = () => {
			setResize((prevState) => !prevState);
		};
		window.addEventListener('resize', resizeEvent);

		return () => {
			window.removeEventListener('resize', resizeEvent);
		};
	}, []);

	useEffect(() => {
		if (!imageRef.current) return;

		if (axisBackground === 'x') {
			const rect = imageRef.current.getBoundingClientRect();
			setMiddle((rect.left + rect.width / 2).toString());
		} else {
			let elm: HTMLElement | null = imageRef.current;
			let dis = elm.offsetHeight / 2;
			while (elm !== document.body) {
				if (!elm) break;

				dis += elm.offsetTop;
				elm = elm.parentElement;
			}
			setMiddle(dis.toString());
		}
	}, [resize, axisBackground]);

	return (
		<MoveBackground width={middle}>
			<div className="grid md:grid-flow-col justify-items-center items-center gap-4 select-none">
				<div className="h-60 w-60 box-border rounded-full overflow-hidden md:rotate-45 p-1 shadow-[2px_2px_8px_2px_rgb(0,0,0,0.5),2px_2px_8px_2px_rgb(255,255,255,0.5)] max-md:shadow-[2px_2px_8px_2px_rgb(0,0,0,0.5)] backdrop-invert">
					<div
						className="relative h-full w-full"
						ref={imageRef || null}
					>
						<Image
							src="/VoidPhoto.jpeg"
							alt="Profile image"
							fill={true}
							className="md:-rotate-45 rounded-full"
						/>
					</div>
				</div>
				<div className="relative grid max-w-[20.5rem] max-md:max-w-72">
					<div className="relative h-24 w-48 max-md:w-full">
						<Image
							src={'/Presentation.svg'}
							alt="Presentation"
							fill
						/>
					</div>
					<TypeWriter />
					<p className="text-sm mt-4 text-justify">
						<span className="font-medium">
							Welcome to my portfolio!
						</span>{' '}
						Here you can learn more about who I am, what I do and
						discover a detailed description of my knowledge and
						skills. I hope you enjoy browsing my work as much as I
						enjoyed creating it.
					</p>
				</div>
			</div>
		</MoveBackground>
	);
}

export default Card;
