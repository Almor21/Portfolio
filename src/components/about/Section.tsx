import React from 'react';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ weight: '400', subsets: ['latin'] });

function Section({
	children,
	title,
	className,
	widthSeparator,
}: {
	children: React.ReactNode;
	title: string;
	className?: string;
	widthSeparator: number;
}) {
	let width: string;

	switch (widthSeparator) {
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
		<div className="py-2">
			<h1 className={`${merriweather.className} font-bold text-2xl`}>
				{title}
			</h1>
			<div className="flex items-center pb-2">
				<div
					className={`h-1 bg-black`}
					style={{
						width,
					}}
				/>
				<div className="h-2 w-2 bg-black rounded-full -translate-x-1" />
			</div>
			<div className={`pl-5 ${className}`}>{children}</div>
		</div>
	);
}

export default Section;
