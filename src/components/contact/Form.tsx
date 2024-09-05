'use client';

import React, { useState } from 'react';
import SendButton from './SendButton';
import { animate } from 'framer-motion';
import useNotify from '@/hook/useNotify';

function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const notify = useNotify();

	const sendAction = async () => {
		let emptyFields = [];
		if (!name) emptyFields.push('name');
		if (!email) emptyFields.push('email');
		if (!message) emptyFields.push('message');

		emptyFields.forEach(async (v) => {
			await animate(
				`#input_${v}`,
				{
					borderColor: 'rgb(230,0,0)',
					color: 'rgb(230,0,0)',
				},
				{
					duration: 0.2,
				}
			);

			await new Promise((resolve) => setTimeout(resolve, 200));

			await animate(
				`#input_${v}`,
				{
					borderColor: 'rgb(255,255,255)',
					color: 'rgb(255,255,255)',
				},
				{ duration: 1 }
			);
		});

		if (emptyFields.length !== 0) {
			notify('Complete all fields', 'FAIL');
			return 'failed'
		};

		const status = await fetch('/api/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				message,
			}),
		}).then((response) => response.status);

		if (status === 200) {
			notify('Sent!', 'OK');
			return 'complete';
		} else {
			notify('Something went wrong.', 'FAIL');
			return 'failed';
		}
	};

	return (
		<form id="form_contact" className="flex flex-col gap-3">
			<input
				id="input_name"
				className="w-full p-2 bg-black text-white border-[1.4px] border-white focus:outline-none"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				id="input_email"
				className="w-full p-2 bg-black text-white border-[1.4px] border-white focus:outline-none"
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<textarea
				id="input_message"
				className="w-full p-2 bg-black text-white border-[1.4px] border-white focus:outline-none resize-y h-32 max-h-40 min-h-14"
				placeholder="Message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>

			<SendButton onActive={sendAction} />
		</form>
	);
}

export default Form;
