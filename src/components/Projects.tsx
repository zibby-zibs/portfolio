"use client";

import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/sanityConfig";
import { Project } from "../../typings";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  console.log({ projects });

  const router = useRouter();
  return (
    <main className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-between mx-auto items-center z-0">
      <div className="absolute top-20 pt-1 w-full h-20 flex justify-center">
        <h3 className="uppercase text-dark-bittersweet/30 text-4xl font-bold tracking-[8px] md:text-6xl md:tracking-[15px] opacity-40">
          projects
        </h3>
        <h3 className="absolute uppercase top-3 tracking-[10px] font-semibold text-lg md:text-3xl md:top-4 md:tracking-[10px]">
          projects
        </h3>
      </div>

      <section className="relative mt-16 sm:mt-11 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-none">
        {projects?.map((project, i) => {
          return (
            <div
              key={project?._id}
              className="w-screen xl:mt-24 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <div className="h-full w-full mb-3 mt-3 sm:px-24 ">
                {project.image.asset && (
                  <Image
                    src={project.image && urlFor(project?.image?.asset)?.url()}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    className="object-contain w-full h-full"
                  />
                )}
              </div>
              <div className="md:px-10">
                <Link href={`https://${project?.linkToBuild}`} target="_blank">
                  <h4 className="text-2xl font-semibold text-center uppercase">
                    <span className="underline decoration-ming-600">{`case ${
                      i + 1
                    } of ${projects.length}`}</span>
                    :{" "}
                    <span className="text-dark-bittersweet">
                      {project?.title}
                    </span>{" "}
                  </h4>
                </Link>

                <p>{project?.summary}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="w-full absolute top-[30%] bg-dark-bittersweet/30 left-0 h-[400px] -skew-y-12"></section>
    </main>
  );
}

export default Projects;
