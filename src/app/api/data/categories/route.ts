import { readData } from '@/utils/dataHandler';

export function GET() {
	const { categories, data } = readData();

	let responseBody = {};

	Object.keys(data).forEach((tech) => {
		const techCategory = data[tech].category;
		if (!responseBody[techCategory]) responseBody[techCategory] = {};
		const category = responseBody[techCategory];
		category[tech] = data[tech];
	});

	return new Response(JSON.stringify(responseBody), {
		headers: {
			'Content-Type': 'application/json',
		},
		status: 200,
	});
}
