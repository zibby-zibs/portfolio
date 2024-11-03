import { client } from "../lib/sanityConfig";
import { groq } from "next-sanity";
import { PageInfo } from "../../typings";

export const fetchPageInfo = async () => {
  const query = groq`*[_type == 'pageInfo' ][0]`;
  const pageInfo = await client.fetch(
    query,
    {},
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );

  // const data = await res.json()

  // const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
