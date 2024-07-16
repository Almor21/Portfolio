import { Categories } from '@/types/data';
import { readDBSkills } from '@/utils/dataHandler';

export function GET() {
	const { categories, areas, data } = readDBSkills();
	
	let responseBody: Categories = {};

	categories.forEach((c) => responseBody[`${c}`] = []);

	Object.keys(data).forEach((tech) => {
		const techCategory = data[tech].category;
		responseBody[techCategory].push(tech);
	});

	return new Response(JSON.stringify(responseBody), {
		headers: {
			'Content-Type': 'application/json',
		},
		status: 200,
	});
}
