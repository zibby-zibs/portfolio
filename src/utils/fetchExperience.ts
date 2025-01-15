import { client } from "../lib/sanityConfig";
import { groq } from "next-sanity";
import { Experience } from "../../typings";

export const fetchExperience = async () => {
  const query = groq`*[_type == 'experience' ] | order(_createdAt desc){
        ...,
        technologies[]->
    }`;
  const experience = await client.fetch(
    query,
    {},
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );

  return experience;
};
