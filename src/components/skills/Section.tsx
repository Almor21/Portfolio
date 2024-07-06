import React from 'react';
import Technology from './Technology';

type Technology = {
	percentage: number;
	category: string;
	note: string;
	knowledge: Array<string>;
	relations: Array<string>;
	tags: Array<string>;
};

interface Data {
	[key: string]: Technology;
}

function Section({ title, data }: { title: string; data: Data }) {
	return (
		<>
			<h1 className="text-gray-400 w-full">{title}</h1>
			<div className="flex flex-wrap gap-3">
				{Object.keys(data).map((tech, index) => {
					const percentage = data[tech].percentage;
					return (
						<Technology key={index} name={tech} percentage={percentage} />
					);
				})}
			</div>
		</>
	);
}

export default Section;
