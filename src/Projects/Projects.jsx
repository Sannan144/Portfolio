import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from 'react-icons/fa';
import { SiTailwindcss, SiGreensock, SiFramer, SiSwiper } from 'react-icons/si';

const Projects = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Projects</h2>

      {/* Tech Stack Section */}
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Tech Stack</h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <div style={{ textAlign: 'center' }}>
            <FaHtml5 size={40} color="#E44D26" />
            <p>HTML</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaCss3Alt size={40} color="#1572B6" />
            <p>CSS</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaJs size={40} color="#F7DF1E" />
            <p>JavaScript</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaReact size={40} color="#61DAFB" />
            <p>React</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SiTailwindcss size={40} color="#38B2AC" />
            <p>Tailwind</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SiGreensock size={40} color="#88CE02" />
            <p>GSAP</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SiFramer size={40} color="#E100FF" />
            <p>Motion</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SiSwiper size={40} color="#0E71EB" />
            <p>Swiper</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
