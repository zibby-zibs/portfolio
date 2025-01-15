"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../lib/sanityConfig";
import { PageInfo } from "../../typings";
import BackgroundCircle from "./BackgroundCircle";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: ["Welcome!", ` I'm, ${pageInfo?.name}.`, "React | Nextjs | Nodejs"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <main className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <div className="h-32 w-32 mx-auto relative rounded-full">
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="heroImage"
          fill
          className="relative rounded-full h-32 w-32 mx-auto object-contain"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-glaucous pb-2 tracking-[10px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-2 text-ming-800">{text}</span>
          <Cursor cursorColor="#dc4921" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">projects</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
