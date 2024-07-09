'use client';

import React, { useEffect, useState, useCallback } from 'react';
import FilterBar from './FilterBar';
import SectionTechnology from './SectionTechnology';
import ModalTechnology from './ModalTechnology';
import { Categories, Data } from '@/types/data';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

function Searcher() {
	const [loading, setLoading] = useState(true);
	const [categories, setCategories] = useState<Categories>();
	const [areas, setAreas] = useState<Array<string>>([]);
	const [data, setData] = useState<Data>();
	const [selected, setSelected] = useState<Array<string>>([]);
	const [techModal, setTechModal] = useState('');

	useEffect(() => {
		Promise.all([
			fetch('/api/data').then((response) => response.json()),
			fetch('/api/data/categories').then((response) => response.json()),
			fetch('/api/areas').then((response) => response.json()),
		]).then((response) => {
			setData(response[0]);
			setCategories(response[1]);
			setAreas(response[2]);
			setSelected(response[2]);
			setLoading(false);
		});
	}, []);

	const openModalTech = useCallback(
		async (name: string) => {
			if (!data) return;

			if (name && !Object.keys(data).includes(name)) {
				console.error(`Technology ${name} didn't find`);
				return;
			}

			setTechModal((prevState) => {
				if (prevState) {
					setTimeout(() => setTechModal(name), 200);
					return '';
				} else {
					return name;
				}
			});
		},
		[data]
	);

	let filterCategories: typeof categories = {};
	if (data && categories) {
		Object.keys(categories).forEach((c) => {
			const filter = categories[c].filter((tech) =>
				data[tech].tags.some((t) => selected.includes(t))
			);

			if (filter.length != 0) {
				filterCategories[c] = filter;
			}
		});
	}

	return loading ? (
		<div className="h-full w-full flex justify-center items-center">
			<div className="relative flex gap-1">
				{Array.from({ length: 3 }, (v ,i)=>i).map((index) => (
					<motion.span
						key={index}
						className="inline-block h-3 w-3 rounded-full bg-black"
						animate={{
							y: [0, '-100%', 0],
						}}
						transition={{
							repeatDelay: 0.8,
							delay: index*0.2,
							duration: 1,
							repeat: Infinity,
							ease: 'easeInOut'
						}}
					/>
				))}
			</div>
		</div>
	) : (
		<div className="grid grid-rows-[auto_1fr] gap-8">
			<FilterBar areas={areas} set={(v) => setSelected(v)} />

			<div
				className="flex flex-col gap-5 overflow-auto"
				style={{
					scrollbarGutter: 'stable',
				}}
			>
				{data &&
					Object.keys(filterCategories).map((categoryName) => (
						<div key={categoryName}>
							<h1 className="text-gray-400 w-full mb-1">
								{categoryName}
							</h1>
							<div className="flex flex-wrap gap-x-1 gap-y-4">
								<AnimatePresence>
									{filterCategories[categoryName].map(
										(tech) => (
											<SectionTechnology
												key={tech}
												name={tech}
												percentage={
													data[tech].percentage
												}
												openTech={openModalTech}
											/>
										)
									)}
								</AnimatePresence>
							</div>
						</div>
					))}
			</div>
			{data && (
				<ModalTechnology
					name={techModal}
					data={data[techModal]}
					open={Boolean(techModal)}
					onClose={() => openModalTech('')}
					openTech={openModalTech}
				/>
			)}
		</div>
	);
}

export default Searcher;
