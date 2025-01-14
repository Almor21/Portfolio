'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ModalAttributions from './ModalAttributions';
import useNotify from '@/hook/useNotify';
import { SOCIAL } from '@/config/contactInfo';

const NAVIGATION_LINKS = [
	{
		text: 'Home',
		link: '/home',
	},
	{
		text: 'About',
		link: '/about',
	},
	{
		text: 'Skills',
		link: '/skills',
	},
	{
		text: 'Contact',
		link: '/contact',
	},
];

const SOCIAL_LINKS = [
	{
		text: 'Github',
		link: SOCIAL.github,
	},
	{
		text: 'Gmail',
		info: SOCIAL.gmail,
	},
	{
		text: 'Linkedin',
		link: SOCIAL.linkedin,
	},
	{
		text: 'Whatsapp',
		info: SOCIAL.whatsapp,
	},
];

function Footer() {
	const [showModal, setShowModal] = useState(false);
	const notify = useNotify();

	return (
		<>
			<footer className="relative w-full bg-gray-950 grid grid-rows-[repeat(2,auto)] justify-items-center z-[999]">
				<div className="max-w-[1440px] w-full py-7 flex justify-around">
					<div className="relative flex items-center">
						<Image
							className="filter invert"
							src={'/Logo.svg'}
							alt="Logo Image"
							width={130}
							height={130}
						/>
					</div>
					<div className="flex flex-col">
						<h2 className="font-medium mb-3 text-white">
							Navigation
						</h2>
						<div className="flex flex-col gap-1 text-gray-400 text-sm">
							{NAVIGATION_LINKS.map((op) => (
								<div
									key={op.text}
									className="relative w-fit group"
								>
									<Link
										href={op.link}
										className="relative transition-all duration-200 group-hover:text-gray-200 group-hover:drop-shadow-[0_0_3px_rgb(229,231,235)] z-10"
									>
										{op.text}
									</Link>
									<span className="absolute inline-block h-full w-full top-0 left-0 border-b border-gray-200 transition-all duration-200 scale-x-0 origin-left group-hover:scale-x-100"></span>
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-col">
						<h2 className="font-medium mb-3 text-white">Social</h2>
						<div translate='no' className="flex flex-col gap-1 text-gray-400 text-sm">
							{SOCIAL_LINKS.map((op) => (
								<div
									key={op.text}
									className="relative w-min group"
								>
									{op.link ? (
										<Link
											href={op.link}
											className="relative transition-all duration-200 group-hover:text-gray-200 group-hover:drop-shadow-[0_0_3px_rgb(229,231,235)] z-10"
											target="_blank"
										>
											{op.text}
										</Link>
									) : (
										<button
											className="relative transition-all duration-200 group-hover:text-gray-200 group-hover:drop-shadow-[0_0_3px_rgb(229,231,235)] z-10"
											onClick={async () => {
												try {
													await navigator.clipboard.writeText(
														op.info ?? ''
													);

													notify('Copied!', 'OK');
												} catch (error) {
													notify(
														'Something went wrong!',
														'FAIL'
													);
													console.error(
														'Error:',
														error
													);
												}
											}}
										>
											{op.text}
										</button>
									)}
									<span className="absolute inline-block h-full w-full top-0 left-0 border-b border-gray-200 transition-all duration-200 scale-x-0 origin-left group-hover:scale-x-100"></span>
								</div>
							))}
						</div>
					</div>
				</div>
				<p className="block w-full py-2 bg-black text-center text-white text-xs">
					All icons used on this page were taken from{' '}
					<Link
						href={'https://www.flaticon.es'}
						target="_blank"
						className="underline"
					>
						Flaticon
					</Link>{' '}
					and{' '}
					<Link
						href={'https://icon-icons.com'}
						target="_blank"
						className="underline"
					>
						Icon-Icons
					</Link>
					.{' '}
					<span
						className="font-semibold cursor-pointer"
						onClick={() => setShowModal(true)}
					>
						Author attributions
					</span>
				</p>

				<ModalAttributions
					open={showModal}
					onClose={() => setShowModal(false)}
				/>
			</footer>
		</>
	);
}

export default Footer;
