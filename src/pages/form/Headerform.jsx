import React from 'react'

import img from './image/ficha_logo.jpg'
// '../assets'
const HeaderForm = () => {
  return (
    <div className='w-full mt-[80px] mx-auto'>

    
      <img src={img} alt="Aea Empreendimentos" className=' w-28 mx-auto' />
      <div class="text-center">
              <h1 class=" uppercase font-bold tracking-wide text-[16px]">ALLAN VITÓRIA DE SOUZA - ME</h1>
              <p class=" font-bold font-arial_font text-[13px] tracking-wider mt-[-15px] ">PROPOSTA DE COMPRA E VENDA</p>
          </div> 
     </div>

  )
}

export default HeaderForm