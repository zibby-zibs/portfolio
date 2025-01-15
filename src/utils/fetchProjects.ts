import { client } from "../lib/sanityConfig";
import { groq } from "next-sanity";
import { Project } from "../../typings";

export const fetchProjects = async () => {
  const query = groq`*[_type == 'project' ] | order(_createdAt desc){
      ...,
      technologies[]->
    }`;
  const projects = await client.fetch(
    query,
    {},
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );

  // const data = await res.json()
  // const projects: Project[] = data.projects;

  return projects;
};
