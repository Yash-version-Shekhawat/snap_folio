import { useState, useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo_sf.svg'
import img2 from './assets/img_2.svg'
import img3 from './assets/img_3.svg'
import line2 from './assets/line_1.svg'
import link1 from './assets/link_1.svg'
import link2 from './assets/link_2.svg'
import link3 from './assets/link_3.svg'
import link4 from './assets/link_4.svg'
import shape_1 from './assets/shape_1.png'
import shape_2 from './assets/shape.png'
import shape_3 from './assets/sparkle.png'
import shape_4 from './assets/semicircle.png'
import shape_5 from './assets/ghost.png'
import designer from './assets/Designer.svg'
import developer from './assets/Developer.svg'
import travel from './assets/travelit_img.svg'
import bhoogol from './assets/iPhone.svg'
import my from './assets/smart.svg'
import cut from './assets/cut.svg'
import travel_logo from './assets/travelit_logo.svg'
import bhoogol_logo from './assets/bhoogol_logo.svg'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import './App.css'
import { gsap } from "gsap";
import AOS from 'aos';
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({duration: 1000,
    easing: 'slide-up'});
  }, []);
  const experiences = [
    {
      time: "2021 - 2023",
      role: "Making Personal Projects",
      type: "Learning",
      company: "College",
      bg: "bg-[#D0F56E20]",
    },
    {
      time: "June 2024 - August 2024",
      role: "Product Designer & Developer",
      type: "Internship",
      company: "Bhoogol Smart Services",
      bg: "bg-[#D0F56E50]",
    },
    {
      time: "March 2024 - May 2024",
      role: "Software Developer",
      type: "Internship",
      company: "StoreBud Tech.",
      bg: "bg-[#D0F56E95]",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const shapes = useRef([]); // Store multiple refs in an array

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = event;

      // Calculate mouse offsets
      const xOffset = ((clientX - innerWidth / 2) / innerWidth) * 50;
      const yOffset = ((clientY - innerHeight / 2) / innerHeight) * 50;

      // Animate each shape individually based on the mouse position
      shapes.current.forEach((shape) => {
        gsap.to(shape, {
          x: xOffset,
          y: yOffset,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Helper function to assign refs dynamically
  const addToRefs = (el) => {
    if (el && !shapes.current.includes(el)) {
      shapes.current.push(el);
    }
  };
  return (
    <div className='relative body w-[100%] h-[100%] bg-black overflow-x-hidden'>
          <div className='Homepage top-0 left-0 w-screen min-h-[0vw] bg-[#5171DF] px-4 overflow-x-hidden'>
            <img className='absolute top-[10em] md:top-[20vw] left-[85%] md:left-[90%] w-[7vw] md:w-[5vw]' src={shape_1} ref={addToRefs}/>
            <img className=' absolute top-[22em] md:top-[25vw] left-[-1%] w-[10vw] md:w-[7vw] overflow-hidden' src={shape_2} ref={addToRefs}/> 
            <img className='absolute top-[7em] md:top-[12vw] left-[70%] w-[5vw] md:w-[3vw] rotate-45' src={shape_3} ref={addToRefs}/>
            <img className='absolute top-[22em] md:top-[34vw] left-[65%] md:left-[60%] w-[3.5vw] md:w-[2vw] rotate-85' src={shape_3} ref={addToRefs}/>
            <img className='absolute top-[12em] md:top-[18vw] left-[20%] w-[2vw] rotate-[30deg]' src={shape_3} ref={addToRefs}/>
            <img className=' absolute top-[30em] md:top-[35vw] left-[90%] md:left-[95%] rotate-90 w-[15vw] md:w-[9vw] overflow-x-hidden' src={shape_4}/>
            <img className='absolute top-[35em] md:top-[45vw] left-[-7%] md:left-[-2%] rotate-[-90deg] w-[20vw] md:w-[7vw] overflow-x-hidden' src={shape_4}/>
            <img className='absolute top-[30em] md:top-[48vw] left-[23%] w-[8vw] md:w-[4vw] rotate-[30deg]' src={shape_5} ref={addToRefs}/>
            <img className='absolute top-[35em] md:top-[42vw] left-[80%] md:left-[87%] w-[6vw] md:w-[3vw] rotate-[-30deg]' src={shape_5} ref={addToRefs}/>

            <div className="NAVBAR top-0 w-full flex justify-between items-center px-2 md:pr-5 pt-1 md:pt-0">
      {/* LEFT SIDE: Logo + Links */}
      <div className="LEFT flex items-center">
        <div className="logo my-[1em]">
          <img className="h-[2em] md:h-[3em]" src={logo} alt="Logo" />
        </div>
        <div
          className={`logo-links flex flex-col gap-5 md:flex md:flex-row z-10 pb-5 pl-5 pt-2 pr-2 md:p-5 md:px-3 m-[15px] md:static 
            fixed top-0 right-0 md:h-auto w-[70%] md:w-auto bg-[#282830] md:bg-transparent
            rounded-2xl transition-transform duration-500 ease-in-out transform md:transform-none 
            ${isOpen ? "translate-x-0" : "translate-x-[120vw]"}`}
        >
          <button
            className="self-end mb-5 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu Links */}
          <h1 className="text-[#D0F56E] text-[1em] md:ml-5">
            A<span className="text-[#ffffff]">bout</span>
          </h1>
          <h1 className="text-[#D0F56E] text-[1em] md:ml-5">
            S<span className="text-[#ffffff]">ervices</span>
          </h1>
          <h1 className="text-[#D0F56E] text-[1em] md:ml-5">
            W<span className="text-[#ffffff]">ork</span>
          </h1>

          {/* Buttons (Visible only in mobile hamburger menu) */}
          <div className="flex md:hidden flex-col items-center gap-2 mt-[35px]">
            <button className="resume h-[2em] w-[8em] bg-[#E05FE4] rounded-lg shadow-md shadow-black p-1 text-[1.1em]">
              Resume
            </button>
            <button className="contact h-[2.35em] w-[10em] bg-[#D0F56E] rounded-lg shadow-md shadow-black p-1 text-[1.1em]">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div className="RIGHT flex items-center md:gap-[20px]">
        <div className="hidden md:flex gap-[20px]">
          <button className="resume h-[2em] w-[8em] bg-[#E05FE4] rounded-lg shadow-md shadow-black p-1 text-[1.1em]">
            Resume
          </button>
          <button className="contact h-[2.35em] w-[10em] bg-[#D0F56E] rounded-lg shadow-md shadow-black p-1 text-[1.1em]">
            Contact Me
          </button>
        </div>

        {/* Hamburger Icon - Visible on small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

            {/*------------------------------------------------------------------------------------------------------------------------------*/}
            <div className='FIRST flex flex-col items-center'>
                <div className='home_text_1 text-white mt-[7vh] md:mt-[20px]'>Welcome to my</div>
                <div className='home_text_2 relative text-[#D0F56E] mt-[-10px] md:mt-[-16px] flex items-center px-6 '>
                  <div>PORT
                  <span className='text-white'>FOLIO</span>
                  </div>
                  <img className="absolute mt-[0.2em] w-[7em] ml-[-25px] " src={cut} alt="" />
                </div>
                <div className='home_text_3 text-[#D0F56E] mt-[-22px] md:mt-[-45px] flex '>SNAP
                  <span className='text-white'>FOLIO</span>
                </div>
                <div className='flex md:flex-row flex-col-reverse items-center md:gap-[5em]'>
                  <img className=" hidden md:block w-[1.2vw]" src={line2}/>
                  <div className='flex flex-row md:flex-col md:items-center mt-[5.4vw] md:mt-[-0.3vw] md:ml-[-4em] gap-[8vw] md:gap-[1.25vw] mb-[6vh] md:mb-[0]'>
                  <button><img className='w-[8vw] md:w-[3vw] ' src={link1}/></button>
                  <button><img className='w-[8vw] md:w-[3vw]' src={link2}/></button>
                  <button><img className='w-[8vw] md:w-[3vw]' src={link3}/></button>
                  <button><img className='w-[8vw] md:w-[3vw]' src={link4}/></button>
                  </div> 
                <img className="w-[65vw] md:w-[30vw] mt-[-8vw] md:ml-[3em] " src={img3} />
                <div className='flex flex-col mt-[-4vw] md:mt-[-3vw]'>
                    <img className="w-[30vw] ml-[-3em] md:w-[18vw]" src={designer} />
                    <img className="w-[30vw] ml-[4em] mt-[-3vw] md:mt-[1vw] md:w-[18vw]" src={developer} />
                </div>
                </div>
            </div>
          </div>
          {/*---------------------------------------------------------------------------------------------*/}
          <div className='second w-screen min-h-[0vw] py-10 px-4 bg-[#ECF5FA]'>
            <div className='flex items-center flex-col text-center '>
            <div className='little text-[#1e1e1e] '>little<span className='about_me'> about me</span></div>
            <div className='content w-[85%] md:w-[45%] flex flex-col gap-5'>
              <div>Hi, I’m Yashvardhan, a passionate developer and product enthusiast with a knack for creating seamless digital experiences. ✦</div>
              <div> I specialize in web and app development, product management, and have dabbled in data analysis. From building responsive designs to solving real-world challenges, I love turning ideas into innovative products.</div>
            </div>
            </div>  
            <div className="w-full mt-10 md:mt-14 md:p-5 ">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/4 flex justify-center j">
              <img className='absolute w-[8vw] md:w-[3vw] left-[25vw] md:left-16' src={shape_3} ref={addToRefs}/>
              <img className='absolute w-[6vw] md:w-[3vw] mt-5 left-[60vw] md:left-[18vw]' src={shape_3} ref={addToRefs}/>
              <img className='absolute w-[7vw] md:w-[2.5vw] mt-[15em] md:mt-32 left-[35vw] md:left-[6.5vw]' src={shape_3} ref={addToRefs}/>
              <img className='absolute w-[5vw] md:w-[2vw] mt-[10em] md:mt-44 left-[58vw] md:left-[17vw]' src={shape_3} ref={addToRefs}/>
              <img
                className='md:w-[25vw]'
                src={my}
              />
            </div>
            <div className="w-full md:w-3/4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`md:grid md:grid-cols-3 flex flex-col gap-2 md:gap-0 ${exp.bg} border-b-[1px] border-[#1e1e1e20] last:border-none p-5 2xl:p-7`}
                >
                <div className="time 2xl:text-2xl">{exp.time}</div>
                <div>
                  <div className="role text-xl 2xl:text-3xl">{exp.role}</div>
                  <div className="intern_type text-gray-500 2xl:text-xl">{exp.type}</div>
                </div>
                <div className="company text-gray-700 2xl:text-2xl">{exp.company}</div>
                </div>
              ))}
            </div>
           </div>
         </div>
        </div>
        <div className='services w-screen min-h-[0vw] p-5 bg-[#282830]'>
          <div className='flex flex-col items-center'>
            <div className='services_heading text-white mb-6'>SERVICES</div>
            <div data-aos="zoom-in-up" data-aos-delay="100" data-aos-easing="ease-in-out" className='service_text text-white'>Web Designing</div>
            <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-easing="ease-in-out"  className='service_text text-white'>Product Management</div>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-easing="ease-in-out"  className='service_text text-white'>Web and App Development</div>
            <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-easing="ease-in-out"  className='service_text text-white'>Video Editing</div>
            <div data-aos="zoom-in-up" data-aos-delay="500" data-aos-easing="ease-in-out"  className='service_text text-white'>Bit of Data Analysis</div>
          </div>
        </div>
    <div className='fourth w-screen min-h-[100vh] py-10 px-4 bg-[#ECF5FA]'>
      <div className='flex items-center flex-col text-center'>
        <div className='little text-[#1e1e1e]'>
          little<span className='about_me'> Work</span>
        </div>
        <div className='content w-[85%] md:w-[45%] flex flex-col gap-5'>
              <div>Throughout my journey, I’ve had the opportunity to dive into development, design, and product management. I thrive on transforming ideas into practical solutions, blending creativity with technology. ✦</div>
              <div> Here’s a glimpse of some projects that reflect my skills and passion.</div>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-6 md:px-10 mt-10 md:mt-14'>
             <div data-aos="flip-down" className='work_1 md:w-1/2 h-[110vw] md:h-[40vw] relative overflow-hidden rounded-lg'>
             <div
              className='inner-work bg-cover bg-center transition-transform duration-500 ease-in-out'
              style={{ backgroundImage: `url(${travel})` }}
             ></div>
             <div className='overlay'>
              <img className='h-[13vw] md:h-[5vw]' src={travel_logo}/>
             </div>
          </div>
          <div data-aos="flip-down" className='work_2 md:w-1/2 h-[110vw] md:h-[40vw] relative overflow-hidden rounded-lg'>
            <div
              className='inner-work bg-cover bg-center transition-transform duration-500 ease-in-out'
              style={{ backgroundImage: `url(${bhoogol})` }}
            ></div>
            <div className='overlay'>
            <img className='h-[13vw] md:h-[5vw]' src={bhoogol_logo}/>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
export default App

/* Import necessary libraries

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const textRef = useRef(null); // Ref for the container holding all letters

  // Helper function to wrap each letter in a span
  const wrapTextInSpans = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="letter">
        {char === " " ? "\u00A0" : char} 
      </span>
    ));
  };

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    // Animate each letter individually with horizontal movement
    gsap.fromTo(
      letters,
      { opacity: 0.2, x: -10 }, // Start slightly to the left with partial opacity
      {
        opacity: 1, // Fully visible
        x: 10, // Slightly shift to the right on scroll down
        stagger: 0.1, // Delay between each letter animation
        scrollTrigger: {
          trigger: textRef.current, // Trigger when the sentence is in view
          start: "top 80%",
          end: "top 60%",
          scrub: 1, // Smooth animation tied to scroll
        },
        duration: 1, // Animation duration for each letter
        ease: "power2.inOut", // Smooth easing
      }
    );
  }, []);

  return (
    <div className="App">
      <div className="spacer" /> 
      <h1 ref={textRef} className="highlight-text">
        {wrapTextInSpans("Creative Developer")}
      </h1>
      <div className="spacer" /> 
    </div>
  );
};

export default App;
*/