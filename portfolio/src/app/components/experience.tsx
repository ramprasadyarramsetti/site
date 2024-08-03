"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconBriefcase } from "@tabler/icons-react";

const ExperienceSection = () => {
  const [selectedCompany, setSelectedCompany] = useState(experiences[0]);

  return (
    <section className="mt-32 mx-auto min-h-[28rem]">
      <span className="text-slate-200 text-3xl text-left font-bold">Work Experience🥼</span>
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-1 w-16 mb-4"></div>
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg gap-12 mt-12">
        <div className="flex-shrink-0 w-full md:w-1/3">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 cursor-pointer transition-transform duration-300 ${
                selectedCompany === exp
                  ? "bg-gray-200 text-black dark:bg-gray-800 dark:text-gray-300"
                  : "hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-gray-300"
              } border-b border-gray-300 dark:border-gray-600 mb-4 md:mb-0`}
              onClick={() => setSelectedCompany(exp)}
            >
              <div className="flex items-center space-x-4">
                <IconBriefcase className="h-6 w-6" />
                <div>
                  <h3 className="text-md font-semibold">{exp.company}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex-grow mt-4 md:mt-0 md:ml-8 p-6 shadow-lg rounded-lg border border-gray-300 dark:border-gray-600">
          <div className="flex items-center space-x-4 mb-4">
            <IconBriefcase className="h-10 w-10 text-blue-500" />
            <div>
              <h3 className="text-2xl font-semibold">{selectedCompany.role}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Period:</strong> {selectedCompany.period}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Location:</strong> {selectedCompany.location}
              </p>
            </div>
          </div>
          <div
            className="text-sm text-gray-700 dark:text-gray-400"
            style={{ maxHeight: "20rem", overflowY: "auto" }}
          >
            <strong>Description:</strong>
            <ul className="list-disc pl-4 mt-2">
              {selectedCompany.descriptionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="text-sm text-gray-700 dark:text-gray-400 mt-4">
            <strong>Skills:</strong>{" "}
            {selectedCompany.skills.map((skill, index) => (
              <span key={index}>
                {index > 0 ? ", " : ""}
                <strong>{skill}</strong>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const experiences = [
    {
      role: "Full Stack Developer",
      company: "StellaX Technologies",
      period: "Nov 2024 - April 2024",
      location: "Remote",
      descriptionPoints: [
        "Led a team to create a responsive website.",
        "Collaborated with clients for requirements and tech stack.",
        "Used VSCode, ChatGPT, Figma, and GitHub for development.",
        "Integrated a chatbot to enhance user engagement."
      ],
      skills: [
        "Full Stack Development",
        "Web Applications",
        "Performance Optimization"
      ],
    },
    {
      role: "Full Stack Developer & Lead",
      company: "GITAM Aero Astro Club",
      period: "May 2024 - Present",
      location: "Visakhapatnam, Andhra Pradesh, India",
      descriptionPoints: [
        "Led a team of 5 developers to build a website for the GITAM Aero Astro Club.",
        "Used VSCode, GitHub, Slack, and Figma for communication, code management, and design.",
        "Mentored team members, ensuring a productive development environment."
      ],
      skills: [
        "Front-End Development",
        "Back-End Web Development",
        "Ticketing system",
        "ReactJS",
        "Node.js"
      ],
    },
    {
      role: "UI/UX designer",
      company: "Purple media",
      period: "Dec 2023 - Jan 2024",
      location: "Visakhapatnam, Andhra Pradesh, India",
      descriptionPoints: [
        "Collaborated with clients and management to create user-friendly UI/UX solutions.",
        "Used Figma and Sanity to design and implement innovative websites and catalogs.",
        "Developed original UI/UX designs from scratch, demonstrating creativity and visual design expertise.",
        "Recognized as 'Cadet of the Week' for designing and implementing a website and catalog for a steel furniture company."
      ],
      skills: [
        "Figma",
        "Prototyping",
        "User Experience",
        "Sanity"
      ],
    },
];
  

export default ExperienceSection;