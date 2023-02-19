import { Experience } from "../typings"

export const fetchExperience = async() =>{
    const res = await fetch(`http://127.0.0.1:3000/api/getExperience`)

    const data = await res.json()
    const experience: Experience[] = data.experience;

    return experience;
}