import { readDBProjects } from '@/utils/dataHandler';

export function GET() {
	const { areas,  data } = readDBProjects();

	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
		},
		status: 200,
	});
}
