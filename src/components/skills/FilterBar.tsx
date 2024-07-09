import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function FilterBar({
	areas,
	set,
}: {
	areas: Array<string>;
	set: (v: Array<string>) => void;
}) {
	const [all, setAll] = useState(false);
	const selectedRef = useRef<Array<boolean>>([]);

	const activeAll = () => {
		if (!all) {
			selectedRef.current = Array.from(
				{ length: areas.length },
				() => false
			);
			setAll(true);
		}
		set(areas);
	};

	const select = (i: number) => {
		selectedRef.current[i] = !selectedRef.current[i];

		if (selectedRef.current.some((v) => v)) {
			if (all) setAll(false);

			set(areas.filter((v, index) => selectedRef.current[index]));
		} else {
			activeAll();
		}
	};

	useEffect(() => {
		selectedRef.current = Array.from({ length: areas.length }, () => false);
		setAll(true);
	}, [areas]);

	return (
		<motion.div
			className="relative w-max flex gap-1 py-2 border-b border-b-black"
			initial={{
				width: 0,
			}}
			animate={{
				width: areas.length == 0 ? 0 : '',
			}}
		>
			<div
				className="relative flex justify-start items-center rounded-full px-3 py-1 cursor-pointer transition-all duration-200"
				style={{
					backgroundColor: all ? 'black' : 'white',
					color: all ? 'white' : 'black',
				}}
				onClick={() => activeAll()}
			>
				All
			</div>

			{areas.map((c, index) => (
				<motion.div
					key={c}
					className="relative flex justify-start items-center rounded-full px-2 py-1 cursor-pointer transition-all duration-200"
					style={{
						backgroundColor: selectedRef.current[index]
							? 'black'
							: 'white',
						color: selectedRef.current[index] ? 'white' : 'black',
					}}
					initial={{
						opacity: 0
					}}
					animate={{
						opacity: 1
					}}
					onClick={() => select(index)}
				>
					{c}
				</motion.div>
			))}
		</motion.div>
	);
}

export default FilterBar;
