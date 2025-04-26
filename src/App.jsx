import { useState } from 'react'
import './App.css'
import Buttons from './Buttons/Buttons'
import Home from './Home/Home'
import Landing from './Landing/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

const App = () => {
const [isTrue , setIsTrue] = useState(false)


  return (
    <>
    <div className='bg-[#FAF9F6] overflow-hidden h-screen w-full'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact/skills' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

// Website Background:   #FAF9F6   /* Soft off-white, clean and elegant */
// Heading Color:        #2C2C2C   /* Deep charcoal, strong and modern */
// Paragraph Text:       #4F4F4F   /* Neutral gray, easy to read */

