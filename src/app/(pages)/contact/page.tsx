import React from 'react';
import Form from '@/components/contact/Form';
import DivTransition from '@/components/DivTransition';
import MoveBackground from '@/components/MoveBackground';
import Links from '@/components/contact/Links';

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
						send me a message. I&apos;m always open to any kinds of
						opportunities, projects or suggestions. I&apos;ll get
						back to you as soon as possible.
					</p>
					<Links />
				</div>
			</MoveBackground>
		</DivTransition>
	);
}

export default ContactPage;
