import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity';
import { Social } from "typings";
import { client } from "../../../lib/sanityConfig";



const query = groq`*[_type == 'social' ]`



type Data = {
    social: Social[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const social: Social[] = await client.fetch(query)

    res.status(200).json({ social })
  }
  