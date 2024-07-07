'use client';

import React, { useEffect, useState, useCallback } from 'react';
import SearchBar from './FilterBar';
import Section from './Section';
import ModalTechnology from './ModalTechnology';
import { Data } from '@/types/data';

function Searcher() {
	const [data, setData] = useState<Data>();
	const [categories, setCategories] = useState();

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
				{categories &&
					Object.keys(categories).map((categoryName, index) => (
						<Section
							key={index}
							title={categoryName}
							data={categories[categoryName]}
							openTech={openModalTech}
						/>
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
