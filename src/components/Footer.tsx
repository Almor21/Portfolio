'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';

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
		link: '#',
	},
	{
		text: 'Gmail',
		link: '#',
	},
	{
		text: 'Linkedin',
		link: '#',
	},
	{
		text: 'Whatsapp',
		link: '#',
	},
];

function Footer() {
	const [showModal, setShowModal] = useState(false);

	return (
		<footer className="w-full bg-gray-950 grid grid-rows-[repeat(2,auto)] justify-items-center">
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
					<h2 className="font-medium mb-3 text-white">Navigation</h2>
					<div className="flex flex-col gap-1 text-gray-400 text-sm">
						{NAVIGATION_LINKS.map((op) => (
							<div key={op.text} className="relative w-min group">
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
					<div className="flex flex-col gap-1 text-gray-400 text-sm">
						{SOCIAL_LINKS.map((op) => (
							<div key={op.text} className="relative w-min group">
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

			<Modal
				title="Attributions"
				open={showModal}
				onClose={() => setShowModal(false)}
			>
				<div className="flex flex-col">
					<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
						<Image
							src={'icons/ArrowDown.svg'}
							alt="Arrow Down Icon"
							width={20}
							height={20}
						/>
						<a
							href="https://www.flaticon.com/free-icons/down-arrow"
							title="down arrow icons"
						>
							Down arrow icons created by Handicon - Flaticon
						</a>
					</div>
					<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
						<Image
							src={'icons/Check.svg'}
							alt="Check Icon"
							width={20}
							height={20}
						/>
						<a
							href="https://www.flaticon.com/free-icons/right"
							title="right icons"
						>
							Right icons created by Pixel perfect - Flaticon
						</a>
					</div>
					<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
						<Image
							src={'icons/Contact.svg'}
							alt="Contact Icon"
							width={20}
							height={20}
						/>
						<a
							href="https://www.flaticon.com/free-icons/contact"
							title="contact icons"
						>
							Contact icons created by Icongeek26 - Flaticon
						</a>
					</div>
					<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
						<Image
							src={'icons/Folder.svg'}
							alt="Folder Icon"
							width={20}
							height={20}
						/>
						<a
							href="https://www.flaticon.com/free-icons/folder"
							title="folder icons"
						>
							Folder icons created by dmitri13 - Flaticon
						</a>
					</div>
					<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
						<Image
							src={'icons/Github.svg'}
							alt="Github Icon"
							width={20}
							height={20}
						/>
						<a
							href="https://www.flaticon.com/free-icons/github"
							title="github icons"
						>
							Github icons created by Freepik - Flaticon
						</a>
					</div>
					<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
						<Image
							src={'icons/Home.svg'}
							alt="Home Icon"
							width={20}
							height={20}
						/>
						<a
							href="https://www.flaticon.com/free-icons/home"
							title="home icons"
						>
							Home icons created by IcoGhost - Flaticon
						</a>
					</div>
					<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
						<Image
							src={'icons/Linkedin.svg'}
							alt="Linkedin Icon"
							width={20}
							height={20}
						/>
						<a
							href="https://www.flaticon.com/free-icons/linkedin"
							title="linkedin icons"
						>
							Linkedin icons created by fauzin idea - Flaticon
						</a>
					</div>
					<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
						<Image
							src={'icons/Mail.svg'}
							alt="Mail Icon"
							width={20}
							height={20}
						/>
						<a
							href="https://www.flaticon.com/free-icons/message-alert"
							title="message alert icons"
						>
							Message alert icons created by VectorPortal -
							Flaticon
						</a>
					</div>
					<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
						<Image
							src={'icons/Phone.svg'}
							alt="Phone Icon"
							width={20}
							height={20}
						/>
						<a
							href="https://www.flaticon.com/free-icons/phone"
							title="phone icons"
						>
							Phone icons created by Gregor Cresnar - Flaticon
						</a>
					</div>
					<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
						<Image
							src={'icons/Star.svg'}
							alt="Star Icon"
							width={20}
							height={20}
						/>
						<a
							href="https://www.flaticon.com/free-icons/star"
							title="star icons"
						>
							Star icons created by Pixel perfect - Flaticon
						</a>
					</div>
					<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
						<Image
							src={'icons/User.svg'}
							alt="User Icon"
							width={20}
							height={20}
						/>
						<a
							href="https://www.flaticon.com/free-icons/user"
							title="user icons"
						>
							User icons created by Freepik - Flaticon
						</a>
					</div>
				</div>
			</Modal>
		</footer>
	);
}

export default Footer;
