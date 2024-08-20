import React, { useContext } from 'react';
import Image from 'next/image';
import Modal from '../Modal';
import { Technology } from '@/types/data';

function ModalTechnology({
	name,
	data,
	open,
	onClose,
	openTech,
}: {
	name: string;
	data: Technology;
	open: boolean;
	onClose: () => void;
	openTech: (name: string) => Promise<void>;
}) {
	if (!open) return;

	if (!data) {
		console.error(`Technology ${name} didn't find`);
		return;
	}

	const degs = 360 * (data.percentage / 100);

	return (
		<Modal
			title={`${name} - ${data.category}`}
			open={open}
			onClose={onClose}
		>
			<div className="max-w-96 max-h-96 grid grid-rows-[auto_auto_1fr_auto] gap-2">
				<div className="flex justify-between">
					<div className="relative w-20 h-20">
						<Image
							src={`/technologies/${name}.png`}
							alt={`${name} Icon`}
							fill={true}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="filter transition-all duration-200 group-hover:blur-[3px]"
						/>
					</div>
					<div
						className="p-2 rounded-full w-20 h-20"
						style={{
							background: `conic-gradient(black ${degs}deg, #e6e6e6 0deg)`,
						}}
					>
						<div className="h-full w-full rounded-full bg-white flex justify-center items-center text-sm">
							{data.percentage}%
						</div>
					</div>
					<div>
						<h2 className="mb-1 text-base underline">Areas:</h2>
						<ul>
							{data.tags.map((tag, index) => (
								<li key={index}>{tag}</li>
							))}
						</ul>
					</div>
				</div>
				<p className="text-justify text-sm">{data.note}</p>
				<div className="overflow-auto">
					<h2 className="mb-1 text-base underline">Topics</h2>
					<ul className="columns-2">
						{data.knowledge.map((kw, index) => (
							<li key={index}>{kw}</li>
						))}
					</ul>
				</div>
				{data.relations.length != 0 && (
					<div>
						<h3 className="text-center text-sm mb-1">Relations</h3>
						<div className="flex justify-center gap-2">
							{data.relations.map((rel, index) => (
								<Image
									key={index}
									src={`/technologies/${rel}.png`}
									alt={`${name} Icon`}
									height={20}
									width={20}
									className="cursor-pointer"
									onClick={() => {
										if (openTech) openTech(rel);
									}}
								/>
							))}
						</div>
					</div>
				)}
			</div>
		</Modal>
	);
}

export default ModalTechnology;
