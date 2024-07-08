import React from "react";
import { frontSkills, backSkills } from "./data";
import Card from "./Card";
function Experiences() {
  return (
    <div className="xl:h-[100vh] flex items-center w-full">
      <div className="py-10 xl:py-0 text-center container">
        <p>Explore my</p>
        <h2 className="mb-8">Experiences</h2>
        <div className="flex flex-col lg:flex-row gap-16 text-left h-full">
          <Card data={frontSkills} dev="Front-End Development" />
          <Card data={backSkills} dev="Back-End Development" />
        </div>
      </div>
    </div>
  );
}

export default Experiences;
