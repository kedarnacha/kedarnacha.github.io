import Image from "next/image"
import React from "react"

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] mx-auto md:grid grid-cols-5 gap-8">
                <div className="col-span-3">
                    <p className="uppercase text-xl tracking-widest text-amber-400 font-bold">About</p>
                    <h2 className="py-4 text-gray-700">Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        I am a junior web developer and recent Telkom Malang Vocational High School graduate. 
                        As a recent graduate with team leadership experience, I am used to to developing, 
                        coordinating, and motivating high-performance teams while maintaining strong team spirit, 
                        promoting team productivity, and identifying others" growth and progress needs. 
                        I"m dependable under pressure.
                    </p>
                    <p className="py-2 text-gray-600">
                        I intend to keep working in this field for a long time. When I"m not working, 
                        I like to play video games and make 3D models in Blender. I learned Photoshop, 
                        CorelDraw, and Premiere Pro in high school, so I have some experience with graphic 
                        design and video editing. There, I also learned ReactJS, Bootstrap, NodeJS, PHP, 
                        HTML, and CSS. At the moment, I"m learning Next.js and Tailwind.
                    </p>
                </div>
                <div className="w-full h-auto m-auto col-span-2 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className="rounded-xl max-h-[200px]" src="https://cdni.iconscout.com/illustration/premium/thumb/coding-project-1884980-1597918.png" alt="/" />
                </div>
            </div>
        </div>
    )
}

export default About