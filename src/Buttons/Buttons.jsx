import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Buttons = ({ onNavigate,btn }) => {
  let btnArr = ['home', 'contact/skills', 'projects', 'about']

  useGSAP(() => [
    gsap.to('.main-buttons', {
      opacity: 1,
      delay: 1,
    }),
  ])

  return (
    <div ref={btn} className='btn-parent fixed z-10 bottom-2 left-1/2 -translate-x-1/2' style={{ whiteSpace: 'nowrap' }}>
      {btnArr.map((name, index) => {
        return (
          <button
            key={index}
            onClick={() => onNavigate(`/${name}`)}
            style={{ fontFamily: 'roboto' }}
            className='main-buttons capitalize rounded-full font-semibold opacity-0 text-sm sm:text-[16px] relative w-20 sm:w-32 cursor-pointer py-1 sm:py-3 border overflow-hidden transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-black hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-white before:to-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:before:left-0'
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}

export default Buttons

