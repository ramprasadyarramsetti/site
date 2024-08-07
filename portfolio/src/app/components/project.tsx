import Link from "next/link";
import React from "react";
import { projectsData } from "../../../content/projects";

function Projects() {
  const topProjects = projectsData.slice(0, 4);

  const FeaturedProjects = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 mx-auto w-full max-w-4xl">
      {topProjects.map((project, index) => (
        <div
          key={index}
          className="shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700 rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 relative overflow-hidden flex flex-col justify-between"
        >
          <figure className="relative">
            {project.img.includes("youtube.com") ? (
              // Embed YouTube video if URL contains "youtube.com"
              <div className="relative w-full h-[200px]">
                <iframe
                  width="100%"
                  height="100%"
                  src={project.img.replace("watch?v=", "embed/")}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-xl"
                />
              </div>
            ) : (
              // Render image for other URLs
              <img
                src={project.img}
                alt={project.title}
                className="h-[200px] w-full object-cover rounded-t-xl"
              />
            )}
          </figure>
          <div className="p-6 text-gray-900 dark:text-white flex flex-col flex-grow">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 my-2 overflow-x-auto">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between mt-auto">
              {project.github && (
                <a
                  className="font-semibold bg-gray-600 hover:bg-gray-700 text-white text-md px-4 py-2 rounded-lg transition-colors duration-300"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col mt-12">
      <p className="text-2xl md:text-3xl font-bold text-start mb-2 text-gray-900 dark:text-white">
        Featured Projects💪
      </p>
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-1 w-16 mb-16"></div>
      <FeaturedProjects />
    </div>
  );
}

export default Projects;
