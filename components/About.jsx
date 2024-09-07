import Image from "next/image";
import React from "react";
import about from "../public/assets/me/about.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-20 md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-5 gap-8">
        <div className="col-span-3">
          <p className="uppercase text-xl tracking-widest text-amber-400 font-bold">
            About
          </p>
          <h2 className="py-4 text-gray-700">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I'm a passionate Full Stack Developer with over 3 years of
            experience in full-cycle web development, specializing in JavaScript
            frameworks like React, Next.js, and Node.js. I'm skilled in Docker
            and Tailwind, with a proven track record of integrating external
            APIs, enhancing user engagement, and consistently delivering high
            levels of client satisfaction and project success.
          </p>
        </div>
        <div className="w-full h-auto m-auto col-span-2 flex items-end justify-end p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={about} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
