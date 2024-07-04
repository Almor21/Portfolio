import React from 'react';

function Separator({ size }: { size: number }) {
	let width: string;

	switch (size) {
		case 1:
			width = '50%';
			break;
		case 2:
			width = '75%';
			break;
		case 3:
			width = '100%';
			break;
		default:
			width = '';
	}

	return (
		<div className="flex items-center">
			<div
				className={`h-1 bg-black`}
				style={{
					width,
				}}
			/>
			<div className="h-2 w-2 bg-black rounded-full -translate-x-1" />
		</div>
	);
}

export default Separator;
