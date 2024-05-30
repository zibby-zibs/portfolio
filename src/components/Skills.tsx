"use client";

import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../../typings";
import Image from "next/image";
import { urlFor } from "../lib/sanityConfig";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-[2088px] xl:px-10 min-h-screen justify-center  mx-auto items-center"
    >
      <div className="absolute top-20 pt-1 w-full h-20 flex justify-center">
        <h3 className="uppercase text-dark-bittersweet/30 text-4xl font-bold tracking-[8px] md:text-6xl md:tracking-[15px] opacity-40">
          skills
        </h3>
        <h3 className="absolute uppercase top-3 tracking-[10px] font-semibold text-lg md:text-3xl md:top-4 md:tracking-[10px]">
          skills
        </h3>
      </div>
      <div className="mt-12 grid grid-cols-4 gap-5 md:mt-40">
        {skills?.map((skill) => {
          return (
            <main
              key={skill?._id}
              className="group relative flex cursor-pointer justify-center items-center"
            >
              <motion.section
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="relative rounded-full w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
              >
                <Image
                  src={urlFor(skill?.image).url()}
                  alt=""
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="object-contain rounded-full w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24"
                />
              </motion.section>

              {/* <section className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:h-24 xl:w-24 rounded-full z-0">
								<div className="flex items-center justify-center h-full">
									<p className="text-2xl font-bold text-black opacity-100">
										{skill?.progress}
									</p>
								</div>
							</section> */}
            </main>
          );
        })}
      </div>
    </motion.main>
  );
}

export default Skills;
