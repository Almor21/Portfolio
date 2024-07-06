import Modal from '@/components/Modal';
import Searcher from '@/components/skills/Searcher';
import React from 'react';

function SkillsPage() {
	return (
		<div className="max-h-full grid grid-rows-[minmax(0,1fr)] grid-cols-[repeat(2,1fr)] gap-28">
			<div className="text-white">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Possimus illum, nulla corrupti, esse perspiciatis recusandae
					odit necessitatibus amet ducimus inventore quibusdam, maxime
					accusantium doloremque enim. Modi repudiandae molestias
					fugit tempora?
				</p>
			</div>
			<Searcher />
		</div>
	);
}

export default SkillsPage;
