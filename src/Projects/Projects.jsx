import gsap from 'gsap'
import { data } from './Data'
import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import Buttons from '../Buttons/Buttons'
import { useLocation, useNavigate } from 'react-router-dom'

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFirstActive, setIsFirstActive] = useState(true)
  const firstRef = useRef()
  const secondRef = useRef()
  const btn = useRef()
  const loc = useLocation()
  const fixRef = useRef()
  const navigate = useNavigate()
  const [prTrue , setPrTrue] = useState(true)

  const handleNavigate = (path) => {

    if(loc.pathname == path) return

    let tl = gsap.timeline()
    tl.to(fixRef.current, {
      right: 0,
      duration: 1,
      ease: 'power2.inOut',
    })
      .set('.projects', {
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

  const next = () => {
    const nextIndex = (activeIndex + 1) % data.length
    const fromRef = isFirstActive ? firstRef : secondRef
    const toRef = isFirstActive ? secondRef : firstRef

    gsap.set('.projects-text', {
      opacity: 0,
    })

    gsap.set(toRef.current, {
      scale: 0.8,
      opacity: 0,
      zIndex: 10,
    })

    gsap.set(fromRef.current, {
      zIndex: 20,
    })

    gsap.to(fromRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 1,
    })

    gsap.to(toRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 0,
      onComplete: () => {
        setActiveIndex(nextIndex)
        setIsFirstActive(!isFirstActive)
      },
    })
  }

  useGSAP(() => {
    gsap.set('.projects-text', {
      opacity: 1,
    })

    gsap.from('.projects-text h2 span', {
      opacity: 0,
      y: 50,
      duration: 1,
    })
    
    gsap.from('.projects-text .letter', {
      opacity: 0,
      y: 50,
      stagger: 0.01, 
      ease: "power2.out",
    })

    gsap.from('.projects-text a',{
      opacity:0,
      duration:1,
    })

  }, [activeIndex])

  const currentImage = data[activeIndex].image
  const nextImage = data[(activeIndex + 1) % data.length].image

  const splitText = (text) => {
    return text.split('').map((letter, index) => {
      if (letter === ' ') {
        return <span key={index} className="letter inline-block">&nbsp;</span>;
      }
      return <span key={index} className="letter inline-block">{letter}</span>
    });
  }

  return (
    <>
    <div ref={fixRef} className='fixedDiv fixed w-full h-screen bg-black z-100 right-[-100%]'></div>
    <div className='projects flex items-center overflow-hidden relative'>
      <div className='w-full h-screen relative' onClick={next}>
        <div className='w-full h-screen z-30 bg-black/90 absolute left-0 top-0'></div>

        <div
          ref={firstRef}
          className='w-full h-full absolute left-0 top-0'
          style={{ zIndex: isFirstActive ? 20 : 10 }}
        >
          <img className='w-full h-full object-cover' src={isFirstActive ? currentImage : nextImage} />
        </div>

        <div
          ref={secondRef}
          className='w-full h-full absolute left-0 top-0'
          style={{ zIndex: !isFirstActive ? 20 : 10 }}
        >
          <img className='w-full h-full object-cover' src={!isFirstActive ? currentImage : nextImage} />
        </div>
      </div>

      <div style={{ fontFamily: 'roboto' }} className='projects-text w-full lg:w-1/2 h-fit flex flex-col gap-2 absolute left-0 lg:left-[20%] top-1/2 -translate-y-1/2 z-[50] text-white px-2'>

        <h2 style={{ fontFamily: 'poppins' }} className='text-[clamp(60px,6vw,100px)] font-semibold mb-6 overflow-hidden tracking-tighter leading-none'>
          <span className='inline-block'>{data[activeIndex].name}</span>
        </h2>

        <p className='text-xl overflow-hidden'>
          {splitText(data[activeIndex].description)}
        </p>

        <a
          href={data[activeIndex].github}
          target='_blank'
          className="group w-fit cursor-pointer flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
        >
          <svg
            className="w-6 h-6 fill-neutral-50"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 100 100"
            width="100"
            x="0"
            xmlns="http://www.w3.org/2000/svg"
            y="0"
          >
            <path d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z" />
          </svg>
          Github
        </a>

        <a
          href={data[activeIndex].live}
          target='_blank'
          className="cursor-pointer w-fit px-8 py-3 rounded-full border-[2px] border-gray-400 text-white font-medium group hover:border-white"
        >
          <div className="relative overflow-hidden">
            <p className="group-hover:-translate-y-7 text-gray-400 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">Live Demo</p>
            <p className="absolute text-white top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">Live Demo</p>
          </div>
        </a>

      </div>
    </div>
      <Buttons prTrue={prTrue} btn={btn} onNavigate={handleNavigate} />
    </>
  )
}

export default Projects
