import Form from '@/components/contact/Form';
import DivTransition from '@/components/DivTransition';
import MoveBackground from '@/components/MoveBackground';
import React from 'react';

function ContactPage() {
	return (
		<DivTransition>
			<MoveBackground
				createDiv
				width="60%"
				className="h-full w-full pt-4"
			>
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
					<p className="my-10">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ipsam, dolore minus. Iste asperiores sit quibusdam ea,
						non sint quia, neque laborum natus consectetur ipsam
						accusamus nihil unde impedit, molestias libero.
					</p>
					<div></div>
				</div>
			</MoveBackground>
		</DivTransition>
	);
}

export default ContactPage;
