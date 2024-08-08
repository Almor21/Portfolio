'use client';

import React, { useEffect, useState } from 'react';

function useIsTouchDevice() {
	const [value, setValue] = useState(false);

	useEffect(() => {
		const resizeEvent = () => {
			setValue(window.matchMedia('(pointer: coarse)').matches);
		};
		resizeEvent();

		window.addEventListener('resize', resizeEvent);

		return () => {
			window.removeEventListener('resize', resizeEvent);
		};
	}, []);

	return value;
}

export default useIsTouchDevice;
