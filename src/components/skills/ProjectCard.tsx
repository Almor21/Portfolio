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
				className="relative h-full p-5 border-[1.4px] border-gray-950 shadow-[1px_3px_10px_2px_rgba(0,0,0,0.2)]"
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
						className="absolute top-0 left-0 w-full h-full grid grid-rows-[auto_1fr_auto] items-center gap-2"
						style={{
							backfaceVisibility: 'hidden',
						}}
					>
						<div className="flex justify-between">
							<h1 className="text-lg font-semibold">{name}</h1>
							<button onClick={() => setActive(!active)}>
								Info
							</button>
						</div>
						<div className="relative w-full h-full">
							<Image
								src={`/projects/${name}.png`}
								alt={`${name} Image`}
								className="object-contain"
								fill
							/>
						</div>
						<div className="flex gap-2">
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
						className="relative h-full grid grid-rows-[auto_1fr_auto] items-center gap-2"
						style={{
							rotateY: 180,
							backfaceVisibility: 'hidden',
						}}
					>
						<div className="flex justify-between">
							<h1 className="text-lg font-semibold">{name}</h1>
							<button onClick={() => setActive(!active)}>
								Info
							</button>
						</div>
						<p className="text-xs border h-full border-black p-1">
							{notes}
						</p>
						<Link
							href={link}
							target="_blank"
							className="underline w-min"
						>
							Link
						</Link>
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default React.memo(ProjectCard);
