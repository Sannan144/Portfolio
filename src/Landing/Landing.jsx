import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const heading1 = "Sannan";
  const heading2 = "Front End";
  const heading3 = "Developer";
  const navg = useNavigate()

  const splitText = (text) => {
    return text.split('').map((word, index) => (
      <span key={index} className="inline-block">
        {word}
      </span>
    ));
  };

  useGSAP(()=>{
    gsap.from('.landing-text-upper span',{
        stagger:0.1,
        opacity:0,
        delay:0.5,
    })
    gsap.from('.landing-text-center span',{
        opacity:0,
        duration:2,
        delay:0.5,
    })
    gsap.from('.landing-text-down span',{
        stagger:-0.1,
        opacity:0,
        delay:0.5,
    })
    gsap.to('.landing-text',{
        translateY:'-120%',
        delay:2,
    })
    gsap.to('.landing',{
        x:'-100%',
        delay:3,
        onComplete:function(){
          navg('/home')
        }
    })
  })

  return (
    <div
      style={{ fontFamily: 'Poppins' }}
      className="landing w-full h-screen fixed z-40 top-0 left-0 bg-black text-white text-[10vw] flex flex-col justify-between leading-none"
    >
      <div className='w-fit overflow-hidden'>
        <h1 className='landing-text landing-text-upper'>{splitText(heading1)}</h1>
      </div>
      <div className='w-fit overflow-hidden mx-auto'>
        <h1 className='landing-text landing-text-center'>{splitText(heading2)}</h1>
      </div>
      <div className='w-fit overflow-hidden ml-auto'>
        <h1 className='landing-text landing-text-down'>{splitText(heading3)}</h1>
      </div>
    </div>
  );
};

export default Landing;
