import { readDBSkills } from '@/utils/dataHandler';

export function GET() {
	const { categories, areas,  data } = readDBSkills();

	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
		},
		status: 200,
	});
}
