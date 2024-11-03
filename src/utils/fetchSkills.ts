import { client } from "../lib/sanityConfig";
import { groq } from "next-sanity";
import { Skill } from "../../typings";

export const fetchSkills = async () => {
  const query = groq`*[_type == 'skills'] `;
  const skills = await client.fetch(
    query,
    {},
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );

  // const data = await res.json()
  // const skills: Skill[] = data.skills;

  return skills;
};
