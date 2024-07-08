import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./data.js";
function Projects() {
  return (
    <div className="projects py-14">
      <div className="container text-center ">
        <p>Browse My Recent</p>
        <h2 className="mb-8">Projects</h2>
        <div className="content grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard projectsData={projectsData} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
