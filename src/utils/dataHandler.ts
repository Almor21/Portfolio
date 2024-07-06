import fs from 'fs'
import path from 'path';

export function readData(): JSON {
    const route = path.join(process.cwd(), 'src', 'data', 'data.json');
    const data = fs.readFileSync(route).toString();

    return JSON.parse(data);
}