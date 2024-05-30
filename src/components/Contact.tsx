"use client";

import React from "react";
import { BsTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../../typings";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:oloyedetimi@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`);

  return (
    <main className="h-screen flex relative flex-col text-center md:flex-row max-w-7xl px-10 justify-between mx-auto items-center space-y-20">
      <div className="absolute top-20 w-full h-20 flex justify-center">
        <h3 className="uppercase text-dark-bittersweet/30 text-4xl font-bold tracking-[10px] md:text-6xl md:tracking-[15px] opacity-40">
          contact
        </h3>
        <h3 className="absolute uppercase top-2 tracking-[10px] font-semibold text-lg md:text-3xl md:top-4 md:tracking-[10px]">
          contact
        </h3>
      </div>

      <div className="flex flex-col mt-30 min-w-full">
        <h4 className="text-l font-medium text-center pt-16 sm:text-2xl xl:text-3xl">
          Reach out.
          <span className="text-dark-bittersweet">Let&apos;s talk</span>
        </h4>

        <div className="flex flex-col justify-between m-3 mx-auto md:flex-row gap-4">
          <div className="flex items-center justify-center">
            <BsTelephoneFill className="text-ming-600 h-5 w-5 md:w-7 md:h-7 xl:w-7 xl:h-7 animate-pulse" />
            <p className="text-lg md:text-2xl xl:text-2xl">
              {pageInfo?.phoneNumber}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <BsFillEnvelopeFill className="text-ming-600 h-5 w-5 md:w-7 md:h-7 xl:w-7 xl:h-7 animate-pulse" />
            <p className="text-lg md:text-2xl xl:text-2xl">{pageInfo?.email}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto"
        >
          <div className="flex flex-col gap-3 md:flex-row  xl:gap-4">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>

          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />

          <button
            type="submit"
            className="bg-dark-bittersweet py-5 px-18 rounded-md text-ming-100 uppercase font-semibold text-lg"
          >
            submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
