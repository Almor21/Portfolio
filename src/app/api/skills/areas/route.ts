import { readDBSkills } from "@/utils/dataHandler"

export function GET() {
    const {categories, areas, data} = readDBSkills();

    return Response.json(areas);
}