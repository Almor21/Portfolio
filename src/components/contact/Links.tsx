'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAnimate } from 'framer-motion';

function Links() {
	const [scope, animate] = useAnimate();
	const [hover, setHover] = useState(-1);

	useEffect(() => {
		if (hover === -1) return;

		animate(`#div${hover} .image`, { y: -3 });
		animate(`#div${hover} .mask`, { scaleX: 0 });

		return () => {
			animate(`#div${hover} .image`, { y: 0 });
			animate(`#div${hover} .mask`, { scaleX: 1 });
		};
	}, [hover]);

	return (
		<div
			ref={scope}
			className="relative flex px-5 justify-between items-center"
		>
			<div
				id="div0"
				className="h-14 w-14 p-2 backdrop-blur-sm border border-[rgba(0,0,0,0.3)] shadow-none rounded cursor-pointer transition-all hover:bg-[rgba(0,0,0,0.08)] hover:border-[rgba(0,0,255,0.1)] hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.08)]"
				onMouseEnter={() => setHover(0)}
				onMouseLeave={() => setHover(-1)}
			>
				<div className="image relative h-full w-full z-10">
					<Image src={'/icons/Github.svg'} alt="i" fill />
				</div>
				<div className="absolute top-[105%] left-1/2 -translate-x-1/2">
					<span className="relative z-0">Github</span>
					<span className="mask absolute inline-block top-0 left-0 bg-white z-10 h-full w-full origin-right" />
				</div>
			</div>
			<div
				id="div1"
				className="relative h-14 w-14 p-2 backdrop-blur-sm border border-[rgba(0,0,0,0.3)] shadow-none rounded cursor-pointer transition-all hover:bg-[rgba(255,0,0,0.08)] hover:border-[rgba(255,0,0,0.1)] hover:shadow-[0_0_10px_5px_rgba(255,0,0,0.08)]"
				onMouseEnter={() => setHover(1)}
				onMouseLeave={() => setHover(-1)}
			>
				<div className="image relative h-full w-full">
					<Image
						className="transition-all"
						src={'/icons/Mail.svg'}
						alt="i"
						fill
						style={
							hover === 1
								? {
										filter: 'invert(66%) sepia(16%) saturate(5848%) hue-rotate(316deg) brightness(100%) contrast(93%)',
								  }
								: {}
						}
					/>
				</div>
				<div className="absolute top-[105%] left-1/2 -translate-x-1/2">
					<span className="relative z-0 text-red-400">Gmail</span>
					<span className="mask absolute inline-block top-0 left-0 bg-white z-10 h-full w-full origin-right" />
				</div>
			</div>
			<div
				id="div2"
				className="h-14 w-14 p-2 backdrop-blur-sm border border-[rgba(0,0,0,0.3)] shadow-none rounded cursor-pointer transition-all hover:bg-[rgba(0,0,255,0.08)] hover:border-[rgba(0,0,255,0.1)] hover:shadow-[0_0_10px_5px_rgba(0,0,255,0.08)]"
				onMouseEnter={() => setHover(2)}
				onMouseLeave={() => setHover(-1)}
			>
				<div className="image relative h-full w-full">
					<Image
						src={'/icons/Linkedin.svg'}
						className="transition-all"
						alt="i"
						fill
						style={
							hover === 2
								? {
										filter: 'invert(59%) sepia(78%) saturate(1022%) hue-rotate(187deg) brightness(95%) contrast(108%)',
								  }
								: {}
						}
					/>
				</div>
				<div className="absolute top-[105%] left-1/2 -translate-x-1/2">
					<span className="relative z-0 text-blue-400">Linkedin</span>
					<span className="mask absolute inline-block top-0 left-0 bg-white z-10 h-full w-full origin-right" />
				</div>
			</div>
		</div>
	);
}

export default Links;
