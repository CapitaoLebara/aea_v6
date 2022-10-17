import React, { useState } from 'react'

//ROUTES
import {Link} from 'react-router-dom'

//IMAGE-LOGO
import ma from './img/aea.jpg'

//ICONS
import { FaBars } from "react-icons/fa";

import { GrClose } from "react-icons/gr";
const Home = () => {
    const [but,Setbut]=useState(false)
    const [buttransition,setbuttransition]=useState()

    function event(){
        if(but==false){
            Setbut(true)

        }else{
            Setbut(false)
        }

    }
  return (
        <header className=' bg-zinc-800 px-20 py-2 w-full fixed text-white '>
            <nav className='  flex items-center justify-between'>
                <img src={ma}  className=' border-2 cursor-pointer border-white rounded-[200px] w-14 h-14'  alt="" />
                <div className='hidden sm:block'>
                <ul className=' flex gap-8 text-xl'>
                    <Link to='/' className=' cursor-pointer'>Home</Link>
                    <Link to='/ficha' className=' cursor-pointer'>Ficha</Link>
                    <Link to='/empreendimentos' className=' cursor-pointer'>Empreendimentos</Link>
                </ul> 

                </div>
                 {but == false ? 
                 (<FaBars id='bars' className='sm:hidden' onClick={event}/>) : 
                 (<FaBars id='bars' className='sm:hidden hidden' onClick={event}/>)}
            
            </nav>
            {but==false ? 
                (<div></div>):
                (<div className=' top-0  bg-zinc-800 z-30 flex-col items-center justify-center flex absolute left-0   h-[800px] w-full'>
                    <GrClose className='w-[50px] h-[50px] absolute top-8 right-8' onClick={event}/>
                    <ul className=' flex flex-col gap-[80px] text-3xl top-[200px] absolute text-center'>
                        <Link onClick={event} to='/' className=' cursor-pointer'>Home</Link>
                        <Link onClick={event} to='/ficha' className=' cursor-pointer'>Ficha</Link>
                        <Link onClick={event} to='/empreendimentos' className=' cursor-pointer'>Empreendimentos</Link>
                    </ul> 
                </div>)}
        </header>    
  )
}



export default Home