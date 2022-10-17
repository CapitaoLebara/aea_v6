//ROUTES
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//COMPONENTS
import Header from './components/Header'
import { Footer } from './components/Footer'


//PAGES
import Home from "./pages/Home"
import {Form} from './pages/form/Form'
import Empreendimento from './pages/Empreendimento'
import { Login } from './components/Login'
import { useState } from 'react'



function App() {

  const [event,setEvent]=useState('hidden')
  function eve(){
    setEvent('flex')
  }
  setTimeout(eve, 8000)


  return (
    <>
    <div>
    <Login/>
    </div>
     <div className={`${event} text-3xl w-[100%]  flex-col items-center`}>
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ficha' element={<Form/>} />
        <Route path='/empreendimentos' element={<Empreendimento/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </>
   
  )
}

export default App
