import React, { useRef, useState } from 'react'
import Nav from './Nav'
import { motion } from 'motion/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Buttons from '../Buttons/Buttons'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
  const [xRotation, setXRotation] = useState(0)
  const [yRotation, setYRotation] = useState(0)
  const homeText = useRef()
  const fixRef = useRef()
  const btn = useRef()
  const navigate = useNavigate()
  const loc = useLocation()

  const move = (e) => {
    if (!homeText.current) return
    const { clientX, clientY } = e
    const rect = homeText.current.getBoundingClientRect()
    const deltaX = clientX - (rect.left + rect.width / 2)
    const deltaY = clientY - (rect.top + rect.height / 2)
    const xRot = deltaX / 40
    const yRot = -deltaY / 25
    setXRotation(xRot)
    setYRotation(yRot)
  }

  useGSAP(() => {
    let tl = gsap.timeline()
    .to('.home',{
      display:'flex'
    })
    .from('.home', {
      opacity: 0,
    }).from('.rotate-text', {
      translateY: '60px',
      opacity: 0,
    })
  })

  let handleNavigate = (path) => {

    if(loc.pathname == path) return

    let tl = gsap.timeline()
    tl.to(fixRef.current,{
      right:0,
      duration:1,
      ease:'power2.inOut',
    })
    .set('.home',{
      delay:'0.5',
      display:'none',
    })
    .set(btn.current,{
      opacity:0,
    })
    .to(fixRef.current,{
      right:'100%',
      duration:1,
      ease:'power2.inOut',
      onComplete:function(){
        navigate(path)
        gsap.set(fixRef.current,{
          right:'-100%'
        })
      }
    })
  }

  return (
    <>
      <div
        ref={fixRef}
        className='fixedDiv fixed w-full h-screen right-[-100%] bg-black z-20'
      ></div>

      <div
        onMouseMove={move}
        style={{ perspective: '1500px' }}
        className='home flex flex-col justify-between h-auto h-screen px-5 pt-3 pb-15 overflow-hidden'
      >
        <Nav />

        <h1
          ref={homeText}
          style={{
            fontFamily: 'poppins',
            transformOrigin: 'center center',
            transform: `rotateX(${yRotation}deg) rotateY(${xRotation}deg)`,
          }}
          className='text-[8vw] lg:text-[5vw] leading-none font-semibold w-full lg:w-[70%] text-[#2C2C2C] transition-transform duration-200 ease-out rotate-text'
        >
          Passionate <span className='text-black'>Front</span>-End <br /> Developer And <br /> <span className='text-black'>Animation</span> Creator.
        </h1>

        <div className='flex justify-between items-center gap-2'>
          <p className='text-2xl' style={{ fontFamily: 'roboto' }}>
            Turning ideas into smooth, responsive interfaces.
          </p>
          <motion.img
            animate={{ transform: 'rotate(360deg)' }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className='w-20 h-20 object-cover border rounded-full'
            src='https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png'
          />
        </div>
      </div>

      <Buttons btn={btn} onNavigate={handleNavigate} />
    </>
  )
}

export default Home
