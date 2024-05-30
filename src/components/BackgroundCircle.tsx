"use client";

import React from "react";
import { motion } from "framer-motion";
type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div
        className="absolute border border-[#dc4921] rounded-full h-[250px] w-[250px] mt-52
            animate-ping"
      />
      <div
        className="absolute border border-ming-800 h-[250px] w-[250px] mt-52 rounded-full
            opacity-20"
      />
      <div
        className="absolute border border-[#dc4921] rounded-full h-[450px] w-[450px] mt-52
            opacity-10"
      />
      <div
        className="rounded-full border border-ming-800 opacity-20 h-[650px] w-[650px] 
            absolute mt-52 animate-pulse"
      />
      {/* <div className='rounded-full border border-astronaut-blue-200 h-[800px] w-[800px] absolute
            mt-52 opacity-20'
        /> */}
    </motion.main>
  );
}

export default BackgroundCircle;
