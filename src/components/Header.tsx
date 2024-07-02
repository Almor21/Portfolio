import React from 'react';
import style from '@/styles/Header.module.css';
import Image from 'next/image';

function Header() {
	return (
		<header className="fixed flex items-center w-full h-14 px-4">
			<div
				className={`${style.reducer} inline-block mr-auto border-[2px] border-transparent text-white rounded-full p-1`}
			>
				E<span className="inline-block w-16">dinson</span>N
				<span className="inline-block">oriega</span>
			</div>
			<div className="inline-flex ml-auto gap-2">
				<Image
					src={'/icons/Phone.svg'}
					className='h-11 w-11'
					alt="Linkedin Icon"
					width={0}
					height={0}
				/>
				<Image
					src={'/icons/Mail.svg'}
					className='h-11 w-11'
					alt="Linkedin Icon"
					width={0}
					height={0}
				/>
				<Image
					src={'/icons/Linkedin.svg'}
					className='h-11 w-11'
					alt="Linkedin Icon"
					width={0}
					height={0}
				/>
			</div>
		</header>
	);
}

export default Header;
