"use client"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-900 min-w-full min-h-screen flex flex-col">

      {/* Navbar */}
      <section className="flex flex-col justify-center items-center gap-3 mt-4 mb-5">
        <nav className="w-full max-w-64 p-4 border border-solid border-white rounded-3xl">
          <ul className="flex justify-center space-x-5">
            <li className="text-white hover:text-blue-500 duration-700 ease-in-out"><Link href="#">Home</Link></li>
            <li className="text-white hover:text-blue-500 duration-700 ease-in-out"><Link href="#">Projects</Link></li>
            <li className="text-white hover:text-blue-500 duration-700 ease-in-out"><Link href="#">About me</Link></li>
          </ul>
        </nav>
      </section>

      {/* Hero section */}
      <section className="w-full flex flex-col items-center mt-16">

        <div className="flex w-full max-w-5xl items-start p-3">
          {/*available for work*/}
          <div className="w-1/2 flex flex-col items-start">
            <div className="p-3 border border-solid border-white rounded-3xl mb-5">
              <p className="text-green-500 text-base font-semibold text-left"><span className="animate-pulse duration-75">🟢</span> Available for work</p>
            </div>
            {/*text*/}
            <h1 className="text-slate-200 text-5xl font-bold text-left mb-3 mt-2">
              Coding the future<br />One line at a time
            </h1>
            <h2 className="text-slate-200 text-2xl font-bold text-left mt-5">
              Crafting elegant solutions with ... and more
            </h2>
            {/*resume*/}
            <button type="button" onClick={() => {
              const link = document.createElement("a");
              link.href = "/Ibrahim_Resume.pdf";
              link.target = "_blank";
              link.download = "Ibrahim_Resume.pdf";
              link.click();
            }} className="bg-transparent text-white border-solid border-2 border-indigo-500 p-3 rounded-md hover:bg-gradient-to-r hover:from-[#fc00ff] hover:to-[#00dbde] mt-10">
              Hire me
            </button>
          </div>
          {/*image*/}
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

      {/*about me */}
      <section></section>

      {/*Connect */}
      <section>
        <h3 className="text-slate-200 text-2xl font-semibold text-left "><span className="underline decoration-cyan-500 decoration-4">Lets</span> connect over coffee☕</h3>
        <p className="text-slate-200 text-lg font-medium text-left">Schedule a time that works for you and let's discuss opportunities, ideas, and more.</p>
      </section>
    </main>
  );
}
