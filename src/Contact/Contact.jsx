import { useRef } from 'react'
import gsap from 'gsap'
import Buttons from '../Buttons/Buttons'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaEnvelope,
  FaGithub,
  FaGlobe
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiSwiper
} from 'react-icons/si'
import { useGSAP } from '@gsap/react'

const Contact = () => {
  const fixRef = useRef()
  const btn = useRef()
  const contactRef = useRef()
  const techRef = useRef()
  const navigate = useNavigate()
  const loc = useLocation()

  const handleNavigate = (path) => {
    if (loc.pathname === path) return

    let tl = gsap.timeline()
    tl.to(fixRef.current, {
      right: 0,
      duration: 1,
      ease: 'power2.inOut',
    })
      .set('.contact,.tech', {
        delay: 0.5,
        display: 'none',
      })
      .set(btn.current, {
        opacity: 0,
      })
      .to(fixRef.current, {
        right: '100%',
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          navigate(path)
          gsap.set(fixRef.current, { right: '-100%' })
        },
      })
  }

  useGSAP(()=>{
    gsap.from(".parg .spain",{
      y:'30',
      stagger:0.1,
      opacity:0,
   })
   gsap.fromTo('.contact h2', {
    opacity: 0,
    y: 20,
  }, {
    opacity: 1,
    y: 0,
    delay:0.5,
    duration: 1.2,
    ease: 'power3.out',
  })

  const items = gsap.utils.toArray('.tech-item')
  gsap.fromTo(items, {
    opacity: 0,
    y: 30,
    scale:0.7,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    scale:1,
    ease: 'power3.out',
    stagger: 0.2,
    delay: 0.3,
  })

  })

  const techData = [
    {
      title: 'Languages',
      items: [
        { icon: <FaHtml5 className="text-orange-500 text-[50px]" />, name: 'HTML' },
        { icon: <FaCss3Alt className="text-blue-600 text-[50px]" />, name: 'CSS' },
        { icon: <FaJs className="text-yellow-400 text-[50px]" />, name: 'JavaScript' }
      ]
    },
    {
      title: 'Frameworks',
      items: [
        { icon: <FaReact className="text-blue-500 text-[50px]" />, name: 'React' },
        { icon: <SiTailwindcss className="text-teal-500 text-[50px]" />, name: 'Tailwind CSS' }
      ]
    },
    {
      title: 'Libraries',
      items: [
        { icon: <SiGreensock className="text-green-500 text-[50px]" />, name: 'GSAP' },
        { icon: <SiFramer className="text-pink-500 text-[50px]" />, name: 'Motion' },
        { icon: <SiSwiper className="text-blue-400 text-[50px]" />, name: 'Swiper' }
      ]
    }
  ]

  let parag = 'I work with a strong stack of modern web technologies including HTML, CSS, JavaScript, React, and libraries like GSAP and Framer Motion to build smooth, interactive, and responsive user interfaces.'

  let parg = parag.split(' ')

  return (
    <>
      <div ref={fixRef} className="fixedDiv fixed w-full h-screen bg-black z-20 right-[-100%]" />

      <div className="contact w-full min-h-[30vh] flex flex-col justify-evenly shadow-[0_4px_20px_rgba(0,0,0,0.3)] p-4 md:p-8" ref={contactRef}>
        <h1 style={{ fontFamily: 'poppins' }} className='text-4xl md:text-5xl font-semibold text-center'>Contact Me</h1>

        <div className='flex flex-col sm:flex-row sm:justify-evenly flex-wrap gap-4 items-center'>
          <h2 style={{ fontFamily: 'poppins' }} className='text-2xl text-[#2C2C2C] flex items-center gap-2'>
            <span>📧</span>
            Email : <span style={{ fontFamily: 'roboto' }} className='font-normal text-[#4F4F4F] text-xl'>sannansnn@gmail.com</span>
          </h2>

          <h2 style={{ fontFamily: 'poppins' }} className='text-2xl text-[#2C2C2C] flex items-center gap-2'>
            <span>🐙</span>
            Github : <a href='https://github.com/Sannan144' target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'roboto' }} className='font-normal text-[#4F4F4F] text-xl underline'>Sannan144</a>
          </h2>

          <h2 style={{ fontFamily: 'poppins' }} className='text-2xl text-[#2C2C2C] flex items-center gap-2'>
            <span>🌐</span>
            Portfolio : <a style={{ fontFamily: 'roboto' }} className='font-normal text-[#4F4F4F] text-xl underline' href='/'>portfolio link</a>
          </h2>
        </div>
      </div>
 
      <div ref={techRef} className='tech py-5 px-3 space-y-6 min-h-[60vh] flex justify-evenly select-none'>
        <div className='flex flex-col justify-evenly'>
        {techData.map((section, index) => (
          <div key={index} className={section.title.toLowerCase()}>
            <h2 style={{ fontFamily: 'Poppins' }} className='text-3xl text-[#2C2C2C] font-semibold uppercase mb-2'>{section.title}</h2>
            <div className="flex gap-1 sm:gap-4 text-[#4F4F4F] font-roboto">
              {section.items.map((item, idx) => (
                <div key={idx} className='tech-item flex border rounded-xl px-2 sm:px-5 py-1 items-center gap-2'>
                  {item.icon}
                  <span className='text-sm sm:text-xl text-[#4F4F4F]'>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
        <div className='parg min-h-full flex justify-center items-center text-[#4F4F4F]'>
          
        <p style={{fontFamily:'roboto'}} className='hidden lg:block w-[70%] text-xl'>
          {
            parg.map((word)=>{
              return(
                <span className='overflow-hidden'>
                  <span className='spain mx-[2px] inline-block'>{word}</span>
                </span>
              )
            })
          }
        </p>
        </div>
      </div>

      <Buttons btn={btn} onNavigate={handleNavigate} />
    </>
  )
}

export default Contact
