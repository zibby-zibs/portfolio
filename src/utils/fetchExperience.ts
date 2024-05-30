import { client } from "../lib/sanityConfig";
import { groq } from "next-sanity";
import { Experience } from "../../typings";

export const fetchExperience = async () => {
  const query = groq`*[_type == 'experience' ]{
        ...,
        technologies[]->
    }`;
  const experience = await client.fetch(query);

  // const data = await res.json()
  // const experience: Experience[] = data.experience;

  return experience;
};
