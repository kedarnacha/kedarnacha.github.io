import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import me from '../public/assets/me/me.png'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vq03654', 'contact_form', form.current, 'xME7JZ4cu2Rwt6IlW')
      .then((result) => {
        if (typeof window !== "undefined") {
          window.alert("Your message has been sent")
        }
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        if (typeof window !== "undefined") {
          window.alert("Error sending message, try again later")
        }
        console.log(error.text);
        form.current.reset();
      });
  };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-amber-400 font-bold'>Contact</p>
        <h2 className='py-4 text-gray-700'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image className='rounded-full object-scale-down hover:scale-105 ease-in duration-300' width="400px" height="350px" src={me} alt="/" />
              </div>
              <div>
                <h2 className='py-2'>Kedar Anugerah Nacha Putra</h2>
                <p>Junior Web Developer</p>
                <p className='py-4'>
                  I am an available for part-time or full-time positions and also project based jobs.</p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect with me</p>
                <div className='flex items-center justify-between py-4'>
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
          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-xl p-3 border-gray-300' type="text" name="user_name" required />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-xl p-3 border-gray-300' type="text" name="phone" required />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input className='border-2 rounded-xl p-3 border-gray-300' type="email" name="user_email" required />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input className='border-2 rounded-xl p-3 border-gray-300' type="text" name="subject" required />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows={10} name="message" required />
                </div>
                <button className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gray-800 w-full p-4 text-gray-100 mt-4' type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className='text-amber-400' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact