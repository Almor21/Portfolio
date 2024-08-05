import React from 'react';
import SendButton from './SendButton';

function Form() {
	return (
		<form className='flex flex-col gap-3'>
			<input
				className="w-full p-2 bg-black text-white border-[1.4px] border-white focus:outline-none"
				placeholder="Name"
			/>
			<input
				className="w-full p-2 bg-black text-white border-[1.4px] border-white focus:outline-none"
				type="email"
				placeholder="Email"
			/>
			<textarea
				className="w-full p-2 bg-black text-white border-[1.4px] border-white focus:outline-none resize-y h-32 max-h-40 min-h-14"
				placeholder="Message"
            />
            
            <SendButton />
		</form>
	);
}

export default Form;
