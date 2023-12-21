import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import tuitionFee from "../public/assets/project/tuitionfee.png";
import pde from "../public/assets/project/pde.png";
import ziswaf from "../public/assets/project/zis.png"
import wreck from "../public/assets/project/wreck.png"

function Projects() {
  return (
    <div id="project" className="w-full pt-12 px-20 lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-amber-400 font-bold">
          Project
        </p>
        <h2 className="py-4 text-gray-700">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Portal ZISWAF"
            subTitle="Next.js Project"
            bgImg={ziswaf}
            projectUrl="https://portal.zisindosat.id/"
          />
          <ProjectItem
            title="WreckIt 4.0"
            subTitle="React.js Project"
            bgImg={wreck}
            projectUrl="https://wreckit.id/"
          />
          <ProjectItem
            title="Platform Digital Engagement"
            subTitle="React.js Project"
            bgImg={pde}
            projectUrl="https://mykidi.id/"
          />
          <ProjectItem
            title="School Tuition Fees (High School Project)"
            subTitle="React.js & Node Project"
            bgImg={tuitionFee}
            projectUrl="https://github.com/kedarnacha/Project-Tuition-Fee-FE"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
