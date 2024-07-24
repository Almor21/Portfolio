import Form from '@/components/contact/Form';
import DivTransition from '@/components/DivTransition';
import MoveBackground from '@/components/MoveBackground';
import Image from 'next/image';
import React from 'react';

function ContactPage() {
	return (
		<DivTransition>
			<MoveBackground createDiv width="60%">
				<div className="flex flex-col gap-10 px-16">
					<h1 className="text-white text-4xl">Contact</h1>
					<Form />
				</div>
				<div className="px-16">
					<div className="flex justify-center">
						<h1 className="text-6xl font-extrabold">
							What&apos;s
							<br />
							up?
						</h1>
					</div>
					<p className="my-10 text-justify">
						Here you can find links to get more information about me
						or to contact me. If you need additional details, have
						any recommendations, or just want to chat, feel free to
						send me a message. I'm always open to any kinds of
						opportunities, projects or suggestions. I'll get back to
						you as soon as possible.
					</p>
					<div className="flex">
						{Array.from({ length: 3 }).map((v, index) => (
							<div key={index} className="relative flex p-2 items-center bg-[rgba(0,0,0,0.11)] rounded shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-[rgba(0,0,0,0.1)] cursor-pointer grow hover:grow-[3]">
								<div className="relative h-10 w-10">
									<Image
										src={'/icons/Github.svg'}
										alt="i"
										fill
									/>
								</div>
								{/* <span className='relative inline-block px-2'>Github</span> */}
							</div>
						))}
					</div>
				</div>
			</MoveBackground>
		</DivTransition>
	);
}

export default ContactPage;
