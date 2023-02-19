import { Social } from "../typings"

export const fetchSocials = async() =>{
    const res = await fetch(`http://127.0.0.1:3000/api/getSocials`)

    const data = await res.json()
    const socials: Social[] = data.social;
    
    
    return socials;
}