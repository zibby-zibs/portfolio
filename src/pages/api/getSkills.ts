import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity';
import { client } from "../../../lib/sanityConfig";
import { Skill, Social } from "typings";


const query = groq 
`*[_type == 'skills'] `


type Data = {
    skills: Skill[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const skills: Skill[] = await client.fetch(query)

    res.status(200).json({ skills })
  }
  