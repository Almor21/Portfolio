import { Data } from '@/types/data';
import fs from 'fs'
import path from 'path';

export function readData(): {categories: Array<String>, data: Data} {
    const route = path.join(process.cwd(), 'src', 'data', 'data.json');
    const data = fs.readFileSync(route).toString();

    return JSON.parse(data);
}