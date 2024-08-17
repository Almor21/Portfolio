import { NextRequest } from 'next/server';
import { limiter } from '@/middleware/rateLimit';
import { sendEmail } from '@/utils/emailHandler';

export async function POST(req: NextRequest) {
	const infoLimiter = await limiter(req.headers.get('x-forwarded-for') || '');

	if (infoLimiter !== 'OK') {
		if (infoLimiter === 'Too Many Requests') {
			return new Response(
				JSON.stringify({ error: 'Too Many Requests.' }),
				{
					headers: {
						'Content-Type': 'application/json',
					},
					status: 429,
				}
			);
		} else {
			console.log('Error', infoLimiter);
			return new Response(
				JSON.stringify({ error: 'Something went wrong.' }),
				{
					headers: {
						'Content-Type': 'application/json',
					},
					status: 500,
				}
			);
		}
	}

	let data;
	try {
		data = await req.json();
		if (!data || !(data.name && data.email && data.message)) {
			throw new Error('Missing properties');
		}
	} catch {
		return new Response(JSON.stringify({ error: 'Missing properties.' }), {
			headers: {
				'Content-Type': 'application/json',
			},
			status: 400,
		});
	}

	try {
		// await sendEmail(data);
		console.log(data)

		return new Response(JSON.stringify({ message: 'Successfull' }), {
			headers: {
				'Content-Type': 'application/json',
			},
			status: 200,
		});
	} catch (error) {
		console.log('Error', error);
		return new Response(
			JSON.stringify({ error: 'Something went wrong.' }),
			{
				headers: {
					'Content-Type': 'application/json',
				},
				status: 500,
			}
		);
	}
}
