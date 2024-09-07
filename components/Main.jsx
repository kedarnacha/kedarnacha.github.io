import Link from "next/link"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

function Main() {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1 className="py-4 text-gray-700">
                        Hi, I'm<span className="text-amber-400"> Nacha</span>
                    </h1>
                    <h1 className="py-4 text-gray-700">
                        A Full Stack Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    Looking for a skilled Full Stack Developer to bring your ideas to life and deliver high-quality web solutions? Let's connect and create something amazing!
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <Link href="https://www.linkedin.com/in/kedarnacha/"
                            target="_blank"
                            rel="noreferrer">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                        </Link>
                        <Link href="https://github.com/kedarnacha"
                            target="_blank"
                            rel="noreferrer">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaGithub />
                            </div>
                        </Link>
                        <Link href="mailto:kedaranugerahnachaputra@gmail.com">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main