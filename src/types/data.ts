export type Technology = {
	percentage: number;
	category: string;
	note: string;
	knowledge: Array<string>;
	relations: Array<string>;
	tags: Array<string>;
};

export interface Categories {
	[key: string]: Array<string>;
}

export interface SkillInfo {
	[key: string]: Technology;
}

export interface ProjectInfo {
	name: string;
	notes: string;
	link: string;
	technologies: Array<string>;
	tags: Array<string>;
}
