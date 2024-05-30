import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

export default async function Home() {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  return (
    <main className="bg-[#e2dde1] h-screen font-poppins text-ming-900 snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-track-ming-900 scrollbar-thumb-bittersweet scrollbar-thin">
      <Head>
        <title>Welcome to my portfolio</title>
        <meta name="description" content="Frontend engineer Nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      {/* hero */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* about */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* WorkExperience */}
      <section id="experience" className="snap-center">
        <WorkExperience experience={experience} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      {/* project */}
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      {/* contact  */}
      <section id="contact" className="snap-center">
        <Contact pageInfo={pageInfo} />
      </section>
    </main>
  );
}
