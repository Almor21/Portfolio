'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useAnimate } from 'framer-motion';
import { useRouter } from 'next/navigation';

function page() {
	const [scope, animate] = useAnimate();
	const router = useRouter();

	useEffect(() => {
		const run = async () => {
			await animate(
				'#logo',
				{ opacity: 1 },
				{ duration: 0.5, delay: 1.2 }
			);
			await animate('#text', { opacity: 1 }, { duration: 0.4, delay:0.5 });

			await new Promise((resolve, reject) => {
				setTimeout(() => resolve(1), 2000);
			});

			await Promise.all([
				animate(
					'#logo',
					{ opacity: 0, filter: 'blur(6px)' },
					{ duration: 0.3 }
				),
				animate(
					'#text',
					{ opacity: 0, filter: 'blur(6px)' },
					{ duration: 0.3 }
				),
			]);

			setTimeout(() => {
				router.push('/home');
			}, 1000);
		};

		run();
	}, []);

	return (
		<div
			className="relative row-span-2 h-full w-full flex flex-col justify-center items-center"
			ref={scope}
		>
			<Image
				id="logo"
				className="opacity-0"
				src={'/Logo.svg'}
				alt="Logo Image"
				width={300}
				height={300}
			/>
			<span id="text" className="opacity-0">
				Welcome to my little world
			</span>
		</div>
	);
}

export default page;
