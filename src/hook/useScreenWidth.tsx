'use client';

import React, { useEffect, useState } from 'react';

function useScreenWidth() {
	const [width, setWidth] = useState(Infinity);

	useEffect(() => {
		const resizeEvent = () => {
			setWidth(window.innerWidth);
		};
		resizeEvent();

		window.addEventListener('resize', resizeEvent);

		return () => {
			window.removeEventListener('resize', resizeEvent);
		};
	}, []);

	return width;
}

export default useScreenWidth;
