import { readData } from '@/utils/dataHandler';

export function GET({ params }: { params: { name: string } }) {
	const { categories, data } = readData();

	return Response.json(data);
}
