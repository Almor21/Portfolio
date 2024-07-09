import React from 'react';
import Searcher from '@/components/skills/Searcher';
import MoveBackground from '@/components/MoveBackground';

function SkillsPage() {
	return (
		<MoveBackground
			createDiv
			width="45%"
			className="max-h-full grid-rows-[minmax(0,1fr)] gap-12"
		>
			<div className="justify-self-end w-1/2 flex flex-col items-center text-white">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Possimus illum, nulla corrupti, esse perspiciatis recusandae
					odit necessitatibus amet ducimus inventore quibusdam, maxime
					accusantium doloremque enim. Modi repudiandae molestias
					fugit tempora?
				</p>
			</div>
			<Searcher />
		</MoveBackground>
	);
}

export default SkillsPage;
