"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-900 min-w-full min-h-screen flex flex-col">

      {/* Navbar */}
      <section className="flex flex-col justify-center items-center gap-3 mt-4">
        <nav className="w-full max-w-64 p-4 border border-solid border-white rounded-3xl">
          <ul className="flex justify-center space-x-5">
            <li className="text-white hover:text-blue-600 duration-700 ease-in-out"><Link href="#">Home</Link></li>
            <li className="text-white hover:text-blue-600 duration-700 ease-in-out"><Link href="#">Projects</Link></li>
            <li className="text-white hover:text-blue-600 duration-700 ease-in-out"><Link href="#">About me</Link></li>
          </ul>
        </nav>
      </section>

      {/* Hero section */}
      <section className="w-full flex flex-col justify-center items-center mt-16">
        <h1 className="text-slate-200 text-4xl font-bold text-center p-5">
          Coding the future<br />One line at a time
        </h1>
        <h2 className="text-slate-200 text-2xl font-bold text-center p-5">
          Crafting elegant solutions with ... and more
        </h2>
        <button type="button" onClick={() => {
          const link = document.createElement("a");
          link.href = "/Ibrahim_Resume.pdf";
          link.target = "_blank";
          link.download = "Ibrahim_Resume.pdf";
          link.click();
        }} className="bg-transparent text-white border-solid border-2 border-indigo-500 p-3 w-30 rounded-md hover:bg-gradient-to-r hover:from-[#fc00ff] hover:to-[#00dbde]">
          Hire me
        </button>
      </section>
    </main>
  );
}
