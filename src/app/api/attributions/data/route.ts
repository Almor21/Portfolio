import { readDBAttributions } from '@/utils/dataHandler';

export function GET() {
	const {data} = readDBAttributions();

	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
		},
		status: 200,
	});
}
