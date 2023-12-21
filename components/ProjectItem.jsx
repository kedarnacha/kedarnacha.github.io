import React from "react"
import Link from "next/link"
import Image from "next/image"

function ProjectItem({title,subTitle,bgImg,projectUrl}) {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#626262] to-[#9BC5C3]">
            <Image className="rounded-xl group-hover:opacity-10" src={bgImg} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="pb-2 md:pb-0 text-white text-xs tracking-wider text-center md:text-sm lg:text-2xl">{title}</h3>
                <p className="hidden md:block pt-1 pb-4 text-white text-[1px] text-center md:text-xs lg:text-base">{subTitle}</p>
                <Link href={projectUrl}>
                    <p className="text-center py-1 text-xs rounded-lg bg-white text-gray-700 font-bold md:text-lg md:py-4 cursor-pointer">More Info</p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItem