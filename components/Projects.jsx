import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import tuitionFee from '../public/assets/project/tuitionfee.png'
import pde from '../public/assets/project/pde.png'

function Projects() {
    return (
        <div id='project' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-amber-400 font-bold'>Project</p>
                <h2 className='py-4 text-gray-700'>What I've Build</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title="School Tuition Fees (High School Project)"
                        subTitle="React & Node Project"
                        bgImg={tuitionFee}
                        projectUrl="https://github.com/kedarnacha/Project-Tuition-Fee-FE"
                    />
                    <ProjectItem
                        title="Platform Digital Engagement (Integration Engineer)"
                        subTitle="React Project"
                        bgImg={pde}
                        projectUrl="https://mykidi.id/"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects