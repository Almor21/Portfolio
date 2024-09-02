'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAnimate } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import Switche from '../ui/Switche';
import Link from 'next/link';
import Toast from '../ui/Toast';
import { SOCIAL } from '@/config/contactInfo';

function Header() {
	const [progress, setProgress] = useState(0);
	const [scope, animate] = useAnimate();
	const router = useRouter();
	const [toastInfo, setToastInfo] = useState({
		text: '',
		isOK: false,
	});
	const [notify, setNotify] = useState(false);

	useEffect(() => {
		const runAnimation = async () => {
			await animate(
				'#text span',
				{
					width: 0,
					margin: 0,
					opacity: 0,
				},
				{
					delay: 1.8,
					duration: 0.8,
				}
			);

			await new Promise((resolve, reject) => {
				setTimeout(() => resolve(1), 500);
			});

			await Promise.all([
				animate(
					scope.current,
					{
						border: '1.35px solid rgb(255,255,255)',
					},
					{
						duration: 1,
					}
				),
				animate(
					'#text',
					{
						opacity: 0,
					},
					{
						duration: 1,
					}
				),
				animate(
					'#logo',
					{
						display: 'block',
						opacity: 1,
					},
					{
						opacity: {
							delay: 0.8,
							duration: 1,
						},
					}
				),
			]);
		};
		runAnimation();

		const handleScroll = () => {
			const limit = 50;
			let value = window.scrollY / limit;
			value = value > 1 ? 1 : value;
			setProgress(value);
		};
		handleScroll();

		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<header
				className="sticky w-full top-0 z-[1000] flex justify-center max-md:bg-black border-[rgba(255,255,255,0.1)]"
				style={{
					borderBottomWidth: progress,
					backdropFilter: `blur(${
						3 * progress
					}px) opacity(${progress})`,
					boxShadow: `0 4px 30px rgba(0,0,0,${progress / 10})`,
				}}
			>
				<div className="max-w-[1440px] w-full flex items-center px-4 py-3">
					<Navbar />
					<div
						ref={scope}
						className="inline-block mr-auto text-white rounded-full p-1 z-10"
						style={{
							border: '1.35px solid transparent',
						}}
					>
						<div className="relative">
							<Image
								id="logo"
								className="hidden filter invert opacity-0 cursor-pointer hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] z-10"
								src={'/Logo.svg'}
								alt="Logo Image"
								fill
								onClick={() => router.push('/')}
							/>
							<h1
								id="text"
								className="flex justify-center items-center md:text-lg"
							>
								E
								<span className="inline-block mr-1 overflow-hidden origin-left">
									dinson
								</span>
								N
								<span className="inline-block overflow-hidden origin-left">
									oriega
								</span>
							</h1>
						</div>
					</div>
					<div className="inline-flex ml-auto gap-2 filter max-md:invert z-10">
						<Link href={SOCIAL.github} target="_blank">
							<Image
								src={'/icons/Github.svg'}
								className="h-11 w-11 max-md:h-9 max-md:w-9"
								alt="Github Icon"
								width={0}
								height={0}
							/>
						</Link>
						<button
							onClick={async () => {
								try {
									await navigator.clipboard.writeText(
										SOCIAL.gmail
									);
									setToastInfo({
										text: 'Copied!',
										isOK: true,
									});
								} catch (error) {
									setToastInfo({
										text: 'Something went wrong!',
										isOK: false,
									});
									console.error('Error:', error);
								} finally {
									setNotify(true);
								}
							}}
						>
							<Image
								src={'/icons/Mail.svg'}
								className="h-11 w-11 max-md:h-9 max-md:w-9"
								alt="Mail Icon"
								width={0}
								height={0}
							/>
						</button>
						<Link
							href={
								SOCIAL.linkedin
							}
							target="_blank"
						>
							<Image
								src={'/icons/Linkedin.svg'}
								className="h-11 w-11 max-md:h-9 max-md:w-9"
								alt="Linkedin Icon"
								width={0}
								height={0}
							/>
						</Link>
						{/* <Switche /> */}
					</div>
				</div>
			</header>
			<Toast
				notify={notify}
				text={toastInfo.text}
				isOK={toastInfo.isOK}
				onClose={() => setNotify(false)}
			/>
		</>
	);
}

export default Header;
