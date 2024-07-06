import { readData } from "@/utils/dataHandler"

export function GET() {
    const {categories, data} = readData();

    return Response.json(categories);
}