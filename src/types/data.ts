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

export type Attribution = {
	name: string;
	archive: string;
	author: string;
	page: string;
	link: string;
};

export type DataEmail = {
	name: string;
	email: string;
	message: string;
}
