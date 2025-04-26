import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Buttons from '../Buttons/Buttons'
import { useLocation, useNavigate } from 'react-router-dom'

const Contact = () => {
  const fixRef = useRef()
  const btn = useRef()
  const contactRef = useRef()
  const navigate = useNavigate()
  const loc = useLocation()

  const handleNavigate = (path) => {

    if(loc.pathname == path) return

    let tl = gsap.timeline()
    tl.to(fixRef.current, {
      right: 0,
      duration: 1,
      ease: 'power2.inOut',
    })
      .set('.contact', {
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

  useEffect(() => {
    gsap.fromTo(contactRef.current, {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.3,
    })
  }, [])

  return (
    <>
      <div ref={fixRef} className="fixedDiv fixed w-full h-screen bg-black z-20 right-[-100%]" />
      
      <div 
      className="contact w-full h-fit flex flex-col gap-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] p-3" 
      ref={contactRef}
      >
        <h1 style={{fontFamily:'poppins'}} className='text-5xl font-semibold text-center'>Contact Me</h1>
        <div className='flex sm:justify-evenly flex-wrap gap-3'>

            <h2 style={{fontFamily:'poppins'}} className='text-2xl text-[#2C2C2C]'>Email : <span style={{fontFamily:'roboto'}} className='font-normal text-[#4F4F4F] text-xl'>sannansnn@gmail.com</span></h2>
            
            <h2 style={{fontFamily:'poppins'}} className='text-2xl text-[#2C2C2C]'>Github : <a href='https://github.com/Sannan144'target="_blank" rel="noopener noreferrer" style={{fontFamily:'roboto'}} className='font-normal text-[#4F4F4F] text-xl underline'>Sannan144</a></h2>
            
            <h2 style={{fontFamily:'poppins'}} className='text-2xl text-[#2C2C2C]'>Portfolio : <a style={{fontFamily:'roboto'}} className='font-normal text-[#4F4F4F] text-xl underline' href='/'>portfolio link</a></h2>

        </div>
      </div>

      <div className='tech py-5 px-3'>

        <div className="languages">
          <h2 className='text-3xl font-semibold uppercase'>Languages</h2>
          
        </div>
        <div className="Frameworks">
          <h2 className='text-3xl font-semibold uppercase my-2'>Frameworks</h2>
          
        </div>
        <div className="Libraries">
          <h2 className='text-3xl font-semibold uppercase'>Libraries</h2>
          
        </div>

      </div>

      <Buttons btn={btn} onNavigate={handleNavigate} />
    </>
  )
}

export default Contact


// 🌐📧
// 🐙