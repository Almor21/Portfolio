import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function ProjectCard({
	name,
	notes,
	link,
	technologies,
	openTech,
}: {
	name: string;
	notes: string;
	link: string;
	technologies: Array<string>;
	openTech?: (name: string) => Promise<void>;
}) {
	return (
		<motion.div
			layout="position"
			className="p-2 grid grid-rows-[repeat(2,auto)] border-[1.4px] border-gray-950 rounded-md"
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
			<div key={name} className="grid grid-cols-[40%_1fr] gap-4">
				<div className="relative flex items-center">
					<Image
						src={`/projects/${name}.png`}
						alt={`${name} Image`}
						className="w-44 object-cover"
						fill={true}
					/>
				</div>
				<div className="flex flex-col">
					<h1 className="text-lg font-semibold">{name}</h1>
					<p className="pl-2 my-1">
						{notes}{' '}
						<span>
							<Link
								href={link}
								target="_blank"
								className="underline"
							>
								Link
							</Link>
						</span>
					</p>
				</div>
			</div>
			<div className="flex gap-2 my-3 flex-wrap">
				<span className="text-xs">Technologies:</span>
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
	);
}

export default React.memo(ProjectCard);
