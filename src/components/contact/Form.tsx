'use client';

import React, { useState } from 'react';
import SendButton from './SendButton';

function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const sendAction = async () => {
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
			return 'complete';
		} else {
			return 'failed'
		}
	};

	return (
		<form className="flex flex-col gap-3">
			<input
				className="w-full p-2 bg-black text-white border-[1.4px] border-white focus:outline-none"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				className="w-full p-2 bg-black text-white border-[1.4px] border-white focus:outline-none"
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<textarea
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
