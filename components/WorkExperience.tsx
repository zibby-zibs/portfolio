import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from 'typings'
import Image from 'next/image'
import { urlFor } from "../lib/sanityConfig"
import { MdOutlineDoubleArrow } from 'react-icons/md'


type Props = {
  experience: Experience[];
}

function WorkExperience({experience}: Props) {
  return (
    <main className='h-screen flex relative overflow-hidden flex-col text-left p-5 md:flex-row max-w-full justify-between mx-auto items-center'>
        <div className='absolute top-16 pt-1 w-full h-20 flex justify-center'>
            <h3 className='uppercase text-dark-bittersweet/30 text-4xl font-bold tracking-[8px] md:text-6xl md:tracking-[15px]'>
                experience
            </h3>
            <h3 className='absolute uppercase top-3 tracking-[10px] font-semibold text-lg md:text-3xl md:top-4 md:tracking-[10px]'>
                experience
            </h3>
        </div>
        <section className='w-full flex snap-x snap-mandatory h-4/5 overflow-x-scroll space-x-5 mt-24 xl:justify-center items-center xl:mt-44 scrollbar-track-ming-900 scrollbar-thumb-bittersweet scrollbar-thin overflow-auto'>
            {experience.map((experience)=>{
              return (
                <article key={experience?._id} className='px-5 text-ming-50 h-3/4  flex-shrink-0 rounded-lg snap-center bg-dark-bittersweet/40 hover:bg-dark-bittersweet/60 cursor-pointer transition-opacity duration-200 overflow-auto scrollbar-thumb-bittersweet scrollbar-thin'>
                  {/* <motion.div
                      initial={{
                          y: -100,
                          opacity: 0,
                      }}
                      transition={{
                          duration: 1.2,
                      }}
                      whileInView={{
                          y: 0,
                          opacity: 1,
                      }}
                      className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"

                  >
                    <Image 
                      src={urlFor(experience?.companyImage)?.url()}
                      alt="company Image"
                      width={0}
                      height={0}
                      sizes="100%"
                      className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                    />
                  </motion.div> */}

                  <div className='md:px-10'>
                      <h4 className='text-2xl sm:text-xl xl:text-4xl font-semibold '>{experience?.company}</h4>
                      <p className='font-light text-xl mt-1'>{experience?.jobTitle}</p>

                      <div className='flex space-x-2 w-8 h-8 object-contain'>
                          {experience?.technologies?.map((technology)=>{
                              return (
                                  <Image 
                                  key={technology?._id}
                                  src={urlFor(technology?.image).url()}
                                  alt=""
                                  width={0}
                                  height={0}
                                  sizes="100%"
                                  className='w-8 h-8 rounded-full object-cover'
                                  />
                              )
                          })}
                      </div>
                      <p className='uppercase py-5 text-ming-800 text-sm'>
                          {new Date(experience?.dateStarted).toDateString()} - {experience.isCrrentlyWorkingHere? "present" : new Date(experience?.dateEnded).toDateString()}
                      </p>

                      <ul className='space-y-4 ml-5 text-lg max-w-sm overflow-y-scroll scrollbar-track-ming-900 scrollbar-thumb-bittersweet scrollbar-thin'>
                          {experience?.points?.map((point, i)=>{
                              return (
                                  <li key={i} className='flex gap-2 text-[1rem]'><span className='items-start justify-center pt-1 text-ming-500'><MdOutlineDoubleArrow /></span>{point}</li>
                              )
                          })}
                      </ul>
                  </div>
                </article>

              )
            })}
        </section>
    </main>
  )
}

export default WorkExperience;