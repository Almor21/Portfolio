'use client';

import React, { useEffect, useState, useCallback } from 'react';
import FilterBar from './FilterBar';
import TechnologyCard from './TechnologyCard';
import ModalTechnology from './ModalTechnology';
import { Categories, SkillInfo, ProjectInfo } from '@/types/data';
import { AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import useIsTouchDevice from '@/hook/useIsTouchDevice';
import Loader from '@/components/ui/Loader';

function Searcher({ className, mode }: { className?: string; mode: string }) {
	const [actualMode, setActualMode] = useState(mode);

	const [loading, setLoading] = useState(true);
	const [categories, setCategories] = useState<Categories>();
	const [areas, setAreas] = useState<Array<string>>([]);
	const [data, setData] = useState<SkillInfo | ProjectInfo[]>();

	const [selected, setSelected] = useState<Array<string>>([]);
	const [techModal, setTechModal] = useState('');

	const isTouch = useIsTouchDevice();

	const openModalTech = useCallback(
		async (name: string) => {
			if (!data) return;

			if (name && !Object.keys(data).includes(name)) {
				console.error(`Technology ${name} didn't find`);
				return;
			}

			setTechModal((prevState) => {
				if (prevState) {
					setTimeout(() => setTechModal(name), 200);
					return '';
				} else {
					return name;
				}
			});
		},
		[data]
	);

	function isSkillInfo(data: any): data is SkillInfo {
		return data && typeof data === 'object';
	}
	function isProjectInfo(data: any): data is ProjectInfo[] {
		return data && Array.isArray(data);
	}

	let filterCategories: typeof categories = {};
	let filterProjects: ProjectInfo[] = [];
	if (actualMode === 'skills' && isSkillInfo(data) && categories) {
		Object.keys(categories).forEach((c) => {
			const filter = categories[c].filter((tech) =>
				data[tech].tags.some((t) => selected.includes(t))
			);

			if (filter.length != 0) {
				filterCategories[c] = filter;
			}
		});
	} else if (actualMode === 'projects' && isProjectInfo(data)) {
		filterProjects = data.filter((p) =>
			p.tags.some((t) => selected.includes(t))
		);
	}

	useEffect(() => {
		const changeMode = async () => {
			setLoading(true);

			if (mode === 'skills') {
				Promise.all([
					fetch('/api/skills/data').then((response) =>
						response.json()
					),
					fetch('/api/skills/data/categories').then((response) =>
						response.json()
					),
					fetch('/api/skills/areas').then((response) =>
						response.json()
					),
				]).then((response) => {
					setData(response[0]);
					setCategories(response[1]);
					setAreas(response[2]);
					setSelected(response[2]);
					setActualMode(mode);
					setLoading(false);
				});
			} else if (mode === 'projects') {
				Promise.all([
					fetch('/api/projects/data').then((response) =>
						response.json()
					),
					fetch('/api/projects/areas').then((response) =>
						response.json()
					),
				]).then((response) => {
					setData(response[0]);
					setAreas(response[1]);
					setSelected(response[1]);
					setActualMode(mode);
					setLoading(false);
				});
			}
		};

		changeMode();
	}, [mode]);

	if (loading) {
		return <Loader className="h-[30rem]" />;
	}

	return (
		<div
			className={`${className} h-[30rem] grid grid-rows-[auto_1fr] gap-8`}
		>
			<FilterBar areas={areas} set={(v) => setSelected(v)} />
			{actualMode === 'skills'
				? isSkillInfo(data) && (
						<div
							className="px-3 flex flex-col gap-5 overflow-auto"
							style={{
								scrollbarGutter: 'stable',
							}}
						>
							{Object.keys(filterCategories).map(
								(categoryName) => (
									<div
										key={categoryName}
										className="grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-y-3"
									>
										<h1 translate='no' className="text-gray-400 w-full col-span-full my-1">
											{categoryName}
										</h1>
										<AnimatePresence>
											{filterCategories[categoryName].map(
												(tech) => (
													<TechnologyCard
														key={tech}
														name={tech}
														percentage={
															data[tech]
																.percentage
														}
														openTech={openModalTech}
														isTouch={isTouch}
													/>
												)
											)}
										</AnimatePresence>
									</div>
								)
							)}
						</div>
				  )
				: isProjectInfo(data) && (
						<div
							className="h-full overflow-auto"
							style={{
								scrollbarGutter: 'stable',
							}}
						>
							<div className="h-min w-full p-3 grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] justify-items-center items-center gap-5">
								<AnimatePresence>
									{filterProjects.map((project) => (
										<ProjectCard
											key={project.name}
											name={project.name}
											notes={project.notes}
											link={project.link}
											technologies={project.technologies}
										/>
									))}
								</AnimatePresence>
							</div>
						</div>
				  )}
			{isSkillInfo(data) && (
				<ModalTechnology
					name={techModal}
					data={data[techModal]}
					open={Boolean(techModal)}
					onClose={() => openModalTech('')}
					openTech={openModalTech}
				/>
			)}
		</div>
	);
}

export default Searcher;
