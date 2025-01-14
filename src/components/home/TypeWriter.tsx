'use client';

import { useEffect, useState } from 'react';

const TEXTS = ['Edinson Noriega', 'Web Developer', 'Frontend Developer'];
const timeType = 0.05;
const blinkTime = 0.5;
const blinkRepetition = 2;

function TypeWriter() {
	const [indexText, setIndexText] = useState(0);
	const [text, setText] = useState('');
	const [cursor, setCursor] = useState(true);
	const [phase, setPhase] = useState(0);
	let interval: NodeJS.Timeout;

	useEffect(() => {
		let index = 0;
		const actualText = TEXTS[indexText];

		switch (phase) {
			case 0:
				interval = setInterval(() => {
					setText(
						(prevState) =>
							prevState +
							actualText.slice(
								prevState.length,
								prevState.length + 1
							)
					);
					index++;

					if (index == actualText.length) {
						setPhase((prevState) => prevState + 1);
					}
				}, timeType * 1000);
				break;

			case 1:
				interval = setInterval(() => {
					setCursor((prevState) => !prevState);
					index++;

					if (index == blinkRepetition * 2) {
						setPhase((prevState) => prevState + 1);
					}
				}, blinkTime * 1000);
				break;

			case 2:
				interval = setInterval(() => {
					setText((prevState) => prevState.slice(0, -1));
					index++;

					if (index == actualText.length) {
						setPhase((prevState) => prevState + 1);
					}
				}, timeType * 1000);
				break;

			case 3:
				setIndexText(indexText != TEXTS.length - 1 ? indexText + 1 : 0);
				setPhase(0);
				break;
		}

		return () => {
			clearInterval(interval);
		};
	}, [phase]);

	return (
		<div translate='no' className="flex items-center bg-black text-white w-full h-11 text-3xl max-md:text-[1.4rem] p-2">
			{text}
			{cursor && (
				<span className="inline-block bg-white h-8 max-md:h-6 w-2 text-nowrap"></span>
			)}
		</div>
	);
}

export default TypeWriter;
