import Image from "next/image"
import React from "react"
import htmlcss from "../public/assets/skills/htmlcss.png"
// import css from "../public/assets/skills/css.png"
// import bootstrap from "../public/assets/skills/bootstrap.png"
// import javascript from "../public/assets/skills/javascript.png"
import next from "../public/assets/skills/next.png"
import db from "../public/assets/skills/Dbeaver.png"
import docker from "../public/assets/skills/docker.png"
import react from "../public/assets/skills/react.png"
import tailwind from "../public/assets/skills/tailwind.png"

function Skills() {
    return (
        <div id="skills" className="w-full px-20 lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-amber-400 font-bold">Skills</p>
                <h2 className="py-4 text-gray-700">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-600">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={htmlcss} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML & CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={docker} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Docker</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={react} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={next} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Next.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={db} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>DBeaver</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={tailwind} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills