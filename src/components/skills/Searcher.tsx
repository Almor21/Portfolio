'use client';

import React, { useEffect, useState } from 'react';
import SearchBar from './FilterBar';
import Section from './Section';

function Searcher() {
	const [data, setData] = useState();
	const [strSearch, setStrSearch] = useState('');

	useEffect(() => {
		fetch('/api/data/categories')
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div className="grid grid-rows-[auto_1fr] gap-8">
			<SearchBar value={strSearch} handleChange={setStrSearch} />
			<div className="flex flex-col gap-5 overflow-auto">
				{
					data &&
					Object.keys(data).map((categoryName, index) => {
						const category = data[categoryName];

						return (
							<Section key={index} title={categoryName} data={category} />
						);
					})
				}
			</div>
		</div>
	);
}

export default Searcher;
