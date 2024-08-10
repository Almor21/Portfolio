'use client';

import React, { useEffect, useState } from 'react';

function useScreenHeight() {
	const [height, setHeight] = useState(Infinity);

	useEffect(() => {
		const resizeEvent = () => {
			setHeight(window.innerHeight);
		};
		resizeEvent();

		window.addEventListener('resize', resizeEvent);

		return () => {
			window.removeEventListener('resize', resizeEvent);
		};
	}, []);

	return height;
}

export default useScreenHeight;
