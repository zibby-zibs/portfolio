"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-full mx-auto p-3 z-50 xl:items-center bg-ming-50 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
      <motion.aside
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials?.map((social) => {
          return (
            <SocialIcon
              key={social._id}
              url={social?.url}
              fgColor="#dc4921"
              bgColor="transparent"
              className="drop-shadow-md hover:scale-105 hover:rotate-180 transition-all duration-500 ease-in-out "
            />
          );
        })}
      </motion.aside>
      <motion.aside
        initial={{
          x: 500,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          className="cursor-pointer drop-shadow-md"
          network="email"
          fgColor="#dc4921"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#2a2c3f]">
          Get in touch
        </p>
      </motion.aside>
    </header>
  );
}
