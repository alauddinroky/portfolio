import React from "react";

function ProjectCard({ projectsData }) {
  return (
    <>
      {projectsData.map((project, index) => (
        <div
          className="project-item c-border p-8 bg-[#fafafa] space-y-3"
          key={index}
        >
          <img
            className="rounded-3xl shadow-lg"
            src={project.image}
            alt={project.title}
          />
          <h3 className="text-black font-semibold mb-10 text-2xl">
            {project.title}
          </h3>
          <div className="space-x-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-[1px]"
            >
              GitHub
            </a>
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-[1px]"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
