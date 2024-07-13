'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import TypeWriter from './TypeWriter';
import MoveBackground from '../MoveBackground';

function Card() {
	const imageRef = useRef<HTMLImageElement>(null);
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

		const rect = imageRef.current.getBoundingClientRect();
		setMiddle((rect.left + rect.width / 2).toString());
	}, [resize]);

	return (
		<MoveBackground width={middle}>
			<div className="absolute grid grid-cols-[repeat(2,auto)] items-center gap-4 top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2">
				<div className="relative h-60 w-60 box-border rounded-full overflow-hidden rotate-45 p-1 shadow-[2px_2px_8px_2px_rgb(0,0,0,0.5),2px_2px_8px_2px_rgb(255,255,255,0.5)] backdrop-invert">
					<div
						className="relative h-full w-full"
						ref={imageRef || null}
					>
						<Image
							src="/VoidPhoto.jpeg"
							alt="Profile image"
							fill={true}
							className="-rotate-45 rounded-full"
						/>
					</div>
				</div>
				<div className="relative grid grid-rows-[repeat(2,1fr)]">
					<Image
						src={'/Presentation.svg'}
						alt="Presentation"
						className="h-auto w-48"
						width={0}
						height={0}
					/>
					<TypeWriter />
					<p className="text-sm h-fit">
						<span className='font-medium'>Welcome to my portfolio!</span> Here you can learn more about
						who I am, what I do and discover a detailed description
						of my knowledge and skills. I hope you enjoy browsing my
						work as much as I enjoyed creating it.
					</p>
				</div>
			</div>
		</MoveBackground>
	);
}

export default Card;
