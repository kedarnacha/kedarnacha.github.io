import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProjectItem({title,subTitle,bgImg,projectUrl}) {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#626262] to-[#9BC5C3]'>
            <Image className='rounded-xl group-hover:opacity-10' src={bgImg} alt="/" />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pt-1 pb-4 text-white text-center'>{subTitle}</p>
                <Link href={projectUrl}>
                    <p className=' text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItem