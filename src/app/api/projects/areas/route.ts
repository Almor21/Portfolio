import { readDBProjects } from "@/utils/dataHandler"

export function GET() {
    const {areas, data} = readDBProjects();

    return Response.json(areas);
}