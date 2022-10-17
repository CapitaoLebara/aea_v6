import React from 'react'

import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

//IMAGE
import image from './img/logo.png'

export const Footer = () => {
  return (
    <footer className='bg-zinc-800 w-full h-auto mt-2'>
        <div className='pt-[1.5rem] px-[6rem]  flex flex-col text-lg items-center text-white'>
            <img src={image} className='w-[15rem] my-[-20px] fill-white '  alt="" />
            <h1 className='text-xl'>@hawk_web</h1>
            <ul class="flex gap-4 mt-[2rem]">
                <a href="https://www.instagram.com/hawk_web/?theme=dark" target="_blanck" class="">
                    <BsInstagram className='w-[24px] h-[24px]'/>
                </a>
                
                <a href="https://www.linkedin.com/in/ikaro-de-assis-sousa-909406196/" target="_blanck" class="">
                    <BsLinkedin  className='w-[24px] h-[24px]'/>
                </a>
                <a href="https://github.com/CapitaoLebara" target="_blanck" class="">
                    <BsGithub  className='w-[24px] h-[24px]'/>
                </a>
            </ul>
            <span class="mt-[2rem]">
                &#169;hawk_web, All rigths reserved
            </span>
        </div>
    </footer>
  )
}
