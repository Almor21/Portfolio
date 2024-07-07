import React from 'react';
import { Data } from '@/types/data';
import SectionTechnology from './SectionTechnology';

function Section({
	title,
	data,
	openTech,
}: {
	title: string;
	data: Data;
	openTech: (name: string) => Promise<void>;
}) {
	return (
		<>
			<h1 className="text-gray-400 w-full">{title}</h1>
			<div className="flex flex-wrap gap-3">
				{Object.keys(data).map((tech, index) => {
					return (
						<SectionTechnology
							key={index}
							name={tech}
							percentage={data[tech].percentage}
							openTech={openTech}
						/>
					);
				})}
			</div>
		</>
	);
}

export default React.memo(Section);
