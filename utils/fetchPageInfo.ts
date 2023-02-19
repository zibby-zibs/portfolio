import { PageInfo } from "../typings"

export const fetchPageInfo = async() =>{
    const res = await fetch(`http://127.0.0.1:3000/api/getPageInfo`)

    const data = await res.json()
    
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}