import { client } from "../lib/sanityConfig";
import { groq } from "next-sanity";
import { Social } from "../../typings";

export const fetchSocials = async () => {
  const query = groq`*[_type == 'social' ]`;
  const socials = await client.fetch(query);

  // const data = await res.json()
  // const socials: Social[] = data.social;

  return socials;
};
