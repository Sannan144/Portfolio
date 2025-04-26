import React, { useRef } from 'react'
import Buttons from '../Buttons/Buttons'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const fixRef = useRef()
  const btn = useRef()
  const loc = useLocation()

  const handleNavigate = (path) => {

    if(loc.pathname == path) return

    let tl = gsap.timeline()
    tl.to(fixRef.current, {
      right: 0,
      duration: 1,
      ease: 'power2.inOut',
    })
      .set('.about', {
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
        onComplete: function () {
          navigate(path)
          gsap.set(fixRef.current, {
            right: '-100%',
          })
        },
      })
  }

  useGSAP(() => {
    gsap.from('.about h1 span', {
      opacity: 0,
      translateY: '80px',
      duration: 1,
      ease: 'power2.out',
    })

    gsap.from('.about .line', {
      opacity: 0,
      translateY: '60px',
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    })

    gsap.from('img',{
        opacity:0,
        scale:.5,
        duration:1.5,
        ease:'linear'
    })
  })

  return (
    <>
      <div ref={fixRef} className='fixedDiv fixed w-full h-screen bg-black z-20 right-[-100%]'></div>
      <div className='about flex flex-col lg:flex-row px-2 sm:p-10 justify-between items-center gap-5 lg:gap-0'>
        <div className='about-text w-full lg:w-1/2'>
          <h1 style={{ fontFamily: 'poppins' }} className='text-[#2C2C2C] text-[60px] overflow-hidden'>
            <span className='inline-block'> About Me </span>
          </h1>

          <p style={{ fontFamily: 'roboto' }} className='text-[#4F4F4F] text-[14px] sm:text-lg lg:text-xl mt-5 mb-2 sm:mb-3'>
            <span className="line block">I’m Muhammad Sannan, a self-taught Front-End Web Developer
            with a strong interest in creating smooth, animated, and responsive web interfaces.I love adding life to websites using tools like GSAP, Framer Motion, AOS, and Swiper, alongside core technologies like HTML, CSS, JavaScript, and React.</span>
          </p>

          <p style={{ fontFamily: 'roboto' }} className='text-[#4F4F4F] text-[14px] sm:text-lg lg:text-xl'>
            <span className="line block">I started learning through YouTube and hands-on projects,
            and recently completed a 6-month internship where I worked on real-world front-end tasks.
            I'm always exploring new tools and techniques to grow and build better web experiences.</span>
          </p>
        </div>

        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
            <img className='w-[40vh] lg:w-[40vw]' src='https://clementgrellier.fr/img/portrait03.webp' />
        </div>

      </div>
      <Buttons btn={btn} onNavigate={handleNavigate} />
    </>
  )
}

export default About
