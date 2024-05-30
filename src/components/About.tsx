"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlFor } from "../lib/sanityConfig";
type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <main className="flex flex-col h-screen relative text-center md:text-left md:flex-row md:px-10 max-w-7xl justify-around mx-auto items-center">
      <div className="absolute top-16 pt-1 w-full h-20 flex justify-center">
        <h3 className="uppercase text-dark-bittersweet/30 text-4xl font-bold tracking-[8px] md:text-6xl md:tracking-[15px] opacity-40">
          about
        </h3>
        <h3 className="absolute uppercase top-3 tracking-[10px] font-semibold text-lg md:text-3xl md:top-4 md:tracking-[10px]">
          about
        </h3>
      </div>

      <motion.div
        initial={{
          x: -200,
          y: -50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="mt-28 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] xl:items-center"
      >
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          alt="profile"
          width={0}
          height={0}
          sizes="100%"
          className="relative object-cover rounded-full md:rounded-lg w-56 h-56 md:w-64 md:h-96 xl:items-center"
        />
      </motion.div>

      <section className="space-y-9 px-0 md:px-10">
        <h4 className="text-4xl font-semibold capitalize">
          here is a{" "}
          <span className="underline decoration-dark-bittersweet">little</span>{" "}
          background
        </h4>
        <p className="text-base p-2">{pageInfo?.backgroundInformation}</p>
      </section>
    </main>
  );
}

export default About;
