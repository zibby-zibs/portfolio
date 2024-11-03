import { client } from "../lib/sanityConfig";
import { groq } from "next-sanity";
import { Social } from "../../typings";

export const fetchSocials = async () => {
  const query = groq`*[_type == 'social' ]`;
  const socials = await client.fetch(
    query,
    {},
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );

  // const data = await res.json()
  // const socials: Social[] = data.social;

  return socials;
};
