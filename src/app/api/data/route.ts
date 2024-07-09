import { Data } from '@/types/data';
import { readData } from '@/utils/dataHandler';

export function GET() {
	const { categories, areas,  data } = readData();

	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
		},
		status: 200,
	});
}

export async function POST(request: Request) {
	let body;
	let options;

	const data = await request.json();
	let filter;

	try {
		filter = data.filter;
    } catch {
        return new Response(JSON.stringify({
            error: 'Bad Request'
        }), {
			headers: {
                'Content-Type': 'application/json',
            },
            status: 400
		});
    }
    
    
}
