import React, { useState } from 'react'

//IMAGE ANIMATION
import intro from './img/aea_intro.gif'

export const Login = () => {
    const [login,setLogin]=useState('flex')
    function msgEncerramento() {
        setLogin('hidden')
        }
        setTimeout(msgEncerramento, 8000)



  return (


    
    <div className={login + ' border absolute z-30 w-full justify-center bg-white h-[100%] flex-col   items-center overflow-hidden'}>
      <div className='border border-black rounded-[40px]'>
      <img src={intro} alt="" srcset="" />
        <p className='text-black text-xl font-bold underline text-center sm:text-3xl md:hidden ' >@hawk_web</p>
      </div>
       
        
    </div>
  )
}


