import { client } from "../lib/sanityConfig";
import { groq } from "next-sanity";
import { Project } from "../../typings";

export const fetchProjects = async () => {
  const query = groq`*[_type == 'project' ]{
      ...,
      technologies[]->
    }`;
  const projects = await client.fetch(query);

  // const data = await res.json()
  // const projects: Project[] = data.projects;

  return projects;
};
