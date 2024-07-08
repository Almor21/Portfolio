'use client';

import React, { useEffect, useState, useCallback } from 'react';
import SearchBar from './FilterBar';
import Section from './Section';
import ModalTechnology from './ModalTechnology';
import { Categories, Data } from '@/types/data';
import SectionTechnology from './SectionTechnology';

function Searcher() {
	const [data, setData] = useState<Data>();
	const [categories, setCategories] = useState<Categories>();

	const [strSearch, setStrSearch] = useState('');

	const [techModal, setTechModal] = useState('');

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

	useEffect(() => {
		Promise.all([
			fetch('/api/data').then((response) => response.json()),
			fetch('/api/data/categories').then((response) => response.json()),
		]).then((response) => {
			setData(response[0]);
			setCategories(response[1]);
		});
	}, []);

	return (
		<div className="grid grid-rows-[auto_1fr] gap-8">
			<SearchBar value={strSearch} handleChange={setStrSearch} />

			<div className="flex flex-col gap-5 overflow-auto">
				{data &&
					categories &&
					Object.keys(categories).map((categoryName, index) => (
						<div key={categoryName}>
							<h1 className="text-gray-400 w-full mb-1">
								{categoryName}
							</h1>
							<div className="flex flex-wrap gap-3">
								{categories[categoryName].map((tech, index) => (
									<SectionTechnology
										key={tech}
										name={tech}
										percentage={data[tech].percentage}
										openTech={openModalTech}
									/>
								))}
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
