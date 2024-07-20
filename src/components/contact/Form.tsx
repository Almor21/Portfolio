import React from 'react';
import SendButton from './SendButton';

function Form() {
	return (
		<form className='flex flex-col gap-3'>
			<input
				className="w-full p-2 bg-black text-white border-[1.4px] border-gray-400 focus:outline-none"
				placeholder="Name"
			/>
			<input
				className="w-full p-2 bg-black text-white border-[1.4px] border-gray-400 focus:outline-none"
				type="email"
				placeholder="Email"
			/>
			<textarea
				className="w-full p-2 bg-black text-white border-[1.4px] border-gray-400 focus:outline-none resize-y h-32 max-h-40 min-h-14"
				placeholder="Message"
            />
            
            {/* <button className='bg-white w-1/3 mt-3 p-2 text-xl'>Click</button> */}
            <SendButton />
		</form>
	);
}

export default Form;
