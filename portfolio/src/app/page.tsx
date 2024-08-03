"use client";
import Link from "next/link";
import Image from "next/image";
import ExperienceSection from "@/app/components/experience";
import AnimatedCounter from "./components/animatedNum";
import Projects from "./components/project";
import ContactButton from "./components/contact";
import TechStack from "./components/techstack";

export default function Home() {
  return (
    <main className="bg-gray-900 min-w-full min-h-screen flex flex-col">
      {/* Navbar */}
      <section className="flex flex-col justify-center items-center gap-3 mt-4 mb-5">
        <nav className="w-full max-w-64 p-4 border border-solid border-white rounded-3xl">
          <ul className="flex justify-center space-x-5">
            <li className="text-white hover:text-blue-500 duration-700 ease-in-out"><Link href="#home">Home</Link></li>
            <li className="text-white hover:text-blue-500 duration-700 ease-in-out"><Link href="#project">Projects</Link></li>
            <li className="text-white hover:text-blue-500 duration-700 ease-in-out"><Link href="#about">About me</Link></li>
          </ul>
        </nav>
      </section>

      {/* Hero section */}
      <section id= 'home' className="w-full flex flex-col items-center mt-16">
        <div className="flex w-full max-w-5xl items-start p-3">
          {/* Available for work */}
          <div className="w-1/2 flex flex-col items-start">
            <div className="p-3 border border-solid border-white rounded-3xl mb-5">
              <p className="text-green-500 text-base font-semibold text-left"><span className="animate-pulse duration-75">🟢</span> Available for work</p>
            </div>
            {/* Text */}
            <h1 className="text-slate-200 text-5xl font-bold text-left mb-3 mt-2">
              Coding the future<br />One line at a time
            </h1>
            <h2 className="text-slate-200 text-2xl font-bold text-left mt-5">
              Crafting elegant solutions with ... and more
            </h2>
            {/* Resume */}
            <button type="button" onClick={() => {
              const link = document.createElement("a");
              link.href = "/Ibrahim_Resume.pdf";
              link.target = "_blank";
              link.download = "Ibrahim_Resume.pdf";
              link.click();
            }} className="bg-transparent text-white font-semibold border-solid border-2 border-indigo-500 p-3 rounded-md hover:bg-gradient-to-r hover:from-[#fc00ff] hover:to-[#00dbde] mt-10">
              Hire me
            </button>
            <div className="flex flex-row justify-start mt-5 space-x-8">
              <a href="https://www.linkedin.com/in/ibrahimchikani" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" width="60" height="60" />
              </a>
              <a href="https://github.com/IbrahimDev00" target="_blank" rel="noopener noreferrer">
                <img src="/github.svg" alt="GitHub" width="60" height="60" />
              </a>
              <a href="mailto:chikani.ibrahim6@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="/email.svg" alt="Mail" width="60" height="60" />
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="w-1/2 flex justify-end pr-10">
            <Image
              src="/hero.jpg"
              width={300}
              height={350}
              alt="hero_img"
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id='about' className="flex flex-col justify-center items-center mt-14 p-3">
        {/* commit stats */}
        <div className="flex justify-center space-x-40 max-w-[500px] p-5 text-5xl font-mono">
          <div className="flex flex-col items-center">
            <AnimatedCounter from={0} to={4} />
            <span className="text-white text-lg mt-2">Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <AnimatedCounter from={0} to={140} />
            <span className="text-white text-lg mt-2">Commits</span>
          </div>
          <div className="flex flex-col items-center">
            <AnimatedCounter from={0} to={5} />
            <span className="text-white text-lg mt-2">Clients</span>
          </div>
        </div>
        {/* work experience */}
        <ExperienceSection />
      </section>

      {/*projects*/}
      <section id='project' className="flex flex-col items-center w-full mt-14 p-3">
        <div className="w-full max-w-7xl">
          <Projects />
        </div>
      </section>
      
      {/*techstack */}
      <section className="flex flex-col items-center justify-center mt-10 p-3">
        <TechStack/>
      </section>
      
      {/* Connect */}
      <section className="flex flex-col items-center justify-center mt-10 p-3 mb-5">
        <ContactButton/>
      </section>
    </main>
  );
}
