import { SkillInfo, ProjectInfo } from '@/types/data';
import fs from 'fs'
import path from 'path';

export function readDBSkills(): {categories: Array<String>, areas:Array<String>, data: SkillInfo} {
    const route = path.join(process.cwd(), 'src', 'data', 'db_skills.json');
    const data = fs.readFileSync(route).toString();

    return JSON.parse(data);
}

export function readDBProjects(): { areas: Array<String>, data: ProjectInfo[]} {
    const route = path.join(process.cwd(), 'src', 'data', 'db_skills.json');
    const data = fs.readFileSync(route).toString();

    return JSON.parse(data);
}