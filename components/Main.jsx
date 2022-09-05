import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

function Main() {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        LET'S BUILD SOMETHING
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm<span className='text-amber-400'> Nacha</span>
                    </h1>
                    <h1 className='py-4 text-gray-700'>
                        A Junior Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I'm a fresh graduate from Telkom Malang Vocational High School majored in computer engineering
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a href="https://www.linkedin.com/in/kedar-anugerah-nacha-putra/"
                            target='_blank'
                            rel='noreferrer'>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href="https://github.com/kedarnacha"
                            target='_blank'
                            rel='noreferrer'>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaGithub />
                            </div>
                        </a>
                        <a href="/#contact">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main