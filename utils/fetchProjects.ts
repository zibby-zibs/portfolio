import { Project } from "../typings"

export const fetchProjects = async() =>{
    const res = await fetch(`http://127.0.0.1:3000/api/getProjects`)

    const data = await res.json()
    const projects: Project[] = data.projects;

    return projects;
}