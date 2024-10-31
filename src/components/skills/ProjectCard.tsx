'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function ProjectCard({
	name,
	notes,
	link,
	technologies,
}: {
	name: string;
	notes: string;
	link: string;
	technologies: Array<string>;
	openTech?: (name: string) => Promise<void>;
}) {
	const [active, setActive] = useState(false);
	const [hover, setHover] = useState(false);

	return (
		<motion.div
			layout="position"
			className="h-full max-w-64 flex flex-col gap-2"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				perspective: '1000px',
			}}
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
			}}
			transition={{
				duration: 0.2,
			}}
		>
			<motion.div
				className="relative h-full border-[1.4px] border-gray-950 shadow-[1px_3px_10px_2px_rgba(0,0,0,0.2)]"
				style={{
					transformStyle: 'preserve-3d',
				}}
				animate={{
					transform:
						(hover ? 'translateZ(30px)' : 'translateZ(0)') +
						' ' +
						(active ? 'rotateY(180deg)' : 'rotateY(0deg)'),
				}}
				transition={{
					duration: 0.3,
				}}
			>
				<div
					className="relative h-full w-full"
					style={{
						transformStyle: 'preserve-3d',
					}}
				>
					<motion.div
						className="absolute top-0 left-0 w-full h-full grid grid-rows-[auto_1fr_auto] items-center"
						style={{
							backfaceVisibility: 'hidden',
							transformStyle: 'preserve-3d',
						}}
					>
						<div className="py-3">
							<h1 className="text-lg text-center font-semibold">
								{name}
							</h1>
						</div>
						<div
							className="relative w-full h-full px-5 border-t border-b border-black cursor-pointer"
							onClick={() => setActive(!active)}
						>
							<div className="relative w-full h-full">
								<Image
									src={`/projects/${name}.png`}
									alt={`${name} Image`}
									className="object-contain"
									fill
								/>
							</div>
						</div>
						<div className="py-3 flex gap-2 justify-center">
							{technologies.map((tech) => (
								<Image
									key={tech}
									src={`/technologies/${tech}.png`}
									alt={`${tech} Image`}
									width={20}
									height={20}
								/>
							))}
						</div>
					</motion.div>
					<motion.div
						className="relative h-full grid grid-rows-[auto_1fr_auto] items-center"
						style={{
							rotateY: 180,
							backfaceVisibility: 'hidden',
						}}
					>
						<div className="px-5 py-2 flex justify-between">
							<h1 className="text-lg font-semibold">{name}</h1>
							<Link
								href={link}
								target="_blank"
								className="underline w-min"
							>
								Link
							</Link>
						</div>
						<p
							className="text-xs h-full px-3 py-1 border-t border-b border-black cursor-pointer"
							onClick={() => setActive(!active)}
						>
							{notes}
						</p>
						<div className="py-3 flex gap-2 justify-center">
							{technologies.map((tech) => (
								<Image
									key={tech}
									src={`/technologies/${tech}.png`}
									alt={`${tech} Image`}
									width={20}
									height={20}
								/>
							))}
						</div>
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default React.memo(ProjectCard);
