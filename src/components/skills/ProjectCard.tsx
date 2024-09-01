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
	return (
		<motion.div
			layout="position"
			className="grid gap-2 cursor-pointer"
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}
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
				className="relative h-64 p-3 border-[1.4px] border-gray-950 shadow-[1px_3px_10px_2px_rgba(0,0,0,0.2)]"
				style={{
					perspective: '1000px',
					transformStyle: 'preserve-3d',
				}}
				animate={
					active
						? {
								rotateY: 180,
						  }
						: {}
				}
				transition={{
					duration: 0.5,
				}}
			>
				<div
					className="relative h-full w-full"
					style={{
						transformStyle: 'preserve-3d',
					}}
				>
					<motion.div
						className="absolute top-0 left-0 w-full"
						style={{
							backfaceVisibility: 'hidden',
						}}
					>
						<div className="w-full flex flex-col gap-4">
							<div className="relative w-full h-44 flex items-center">
								<Image
									src={`/projects/${name}.png`}
									alt={`${name} Image`}
									className=" object-cover"
									fill
								/>
							</div>
						</div>
						<h1 className="text-lg font-semibold">{name}</h1>
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
						className="absolute top-0 left-0 h-full flex flex-col justify-center"
						style={{
							rotateY: 180,
							backfaceVisibility: 'hidden',
						}}
					>
						<h1 className="text-lg font-semibold">{name}</h1>
						<p className="text-xs">{notes}</p>
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default React.memo(ProjectCard);
