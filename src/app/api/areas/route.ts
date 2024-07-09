import { readData } from "@/utils/dataHandler"

export function GET() {
    const {categories, areas, data} = readData();

    return Response.json(areas);
}