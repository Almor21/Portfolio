'use client';

import React, { useEffect, useState } from 'react';
import Modal from '../ui/Modal';
import Image from 'next/image';
import { Attribution } from '@/types/data';
import Loader from '../ui/Loader';

function ModalAttributions({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	const [data, setData] = useState<Array<Attribution> | null>(null);

	useEffect(() => {
		fetch('/api/attributions/data')
			.then((response) => response.json())
			.then((response) => setData(response));
	}, []);

	return (
		<Modal title="Attributions" open={open} onClose={onClose}>
			{!data ? (
				<Loader className="h-full" />
			) : (
				<div className="flex flex-col">
					{data.map((a) => (
						<div key={a.name} className="grid grid-cols-[auto_1fr] gap-2 items-center">
							<Image
								src={a.archive}
								alt={`${a.name} Icon`}
								width={20}
								height={20}
							/>
							<a
								href={a.link}
								target='_blank'
								title={`${a.name} icons`}
							>
								{a.name} icon created by {a.author} - {a.page}
							</a>
						</div>
					))}
				</div>
			)}
		</Modal>
	);
}

export default ModalAttributions;
