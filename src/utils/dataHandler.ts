import { Data } from '@/types/data';
import fs from 'fs'
import path from 'path';

export function readData(): {categories: Array<String>, areas:Array<String>, data: Data} {
    const route = path.join(process.cwd(), 'src', 'data', 'db_skills.json');
    const data = fs.readFileSync(route).toString();

    return JSON.parse(data);
}