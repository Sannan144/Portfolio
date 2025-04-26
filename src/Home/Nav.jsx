import React from 'react'

const Nav = () => {
  return (
    <div className='w-full flex justify-between items-center'>
        <h1 style={{fontFamily:'poppins'}} className='text-2xl text-[#2C2C2C] font-semibold select-none'>SANNAN</h1>

        <button
            className="cursor-pointer px-8 py-3 rounded-full border-[2px] border-slate-500 text-white font-medium group hover:border-black"
            >
            <div className="relative overflow-hidden">
                <p
                className="group-hover:-translate-y-7 text-[#4F4F4F] duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                Contact Me
                </p>
                <p
                className="absolute text-black top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                Contact Me
                </p>
            </div>
        </button>

    </div>
  )
}

export default Nav