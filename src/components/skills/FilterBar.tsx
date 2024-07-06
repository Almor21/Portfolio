import Image from 'next/image';
import React from 'react';

function FilterBar({
	value,
	handleChange,
}: {
	value: string;
	handleChange: (v: string) => void;
}) {
	return (
		<div className="relative w-full rounded-full overflow-hidden shadow-[0_3px_8px_2px_rgb(0,0,0,0.2)]">
			<input
				placeholder="Filter..."
				className="w-full py-1 px-5 focus:outline-none border-2 border-black rounded-full placeholder:italic placeholder:text-gray-300"
				value={value}
				onChange={(e) => handleChange(e.target.value)}
			/>
			<div className="absolute right-0 top-0 justify-self-end bg-black h-full p-2 hover:cursor-pointer">
				<Image
					src={'/icons/Filter.svg'}
					alt="Filter Icon"
					width={0}
					height={0}
					className="filter invert h-full w-auto"
				/>
			</div>
		</div>
	);
}

export default FilterBar;
