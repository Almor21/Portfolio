export type Technology = {
	percentage: number;
	category: string;
	note: string;
	knowledge: Array<string>;
	relations: Array<string>;
	tags: Array<string>;
};

export interface Data {
	[key: string]: Technology;
}