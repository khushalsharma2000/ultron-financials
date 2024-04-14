import React, { useEffect, useState } from 'react';
import './About.css'; // Import your stylesheet

const About = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = 3; // Update with the total number of slides
  const autoPlay = true; // Set to true to enable autoplay
  const timeTrans = 4000; // Transition time in milliseconds

  useEffect(() => {
    const slides = document.querySelectorAll('.slider li');
    const navDots = document.querySelectorAll('.slider #aboutnav .aboutspan');
    const indexElements = Array.from({ length: totalSlides }, (_, index) => index);

    const setCurret = () => {
      slides[current].classList.add('current');
      navDots[current].classList.add('current_dot');
    };

    const changeSlide = (index) => {
      navDots.forEach((dot) => dot.classList.remove('current_dot'));
      slides.forEach((slide) => slide.classList.remove('prev', 'current'));

      const prevElements = indexElements.filter((value) => value < index);

      prevElements.forEach((indexPrevEle) => slides[indexPrevEle].classList.add('prev'));

      slides[index].classList.add('current');
      navDots[index].classList.add('current_dot');
    };

    const handleAutoPlay = () => {
      const intervalId = setInterval(() => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % totalSlides);
        changeSlide((current + 1) % totalSlides);
      }, timeTrans);

      return () => clearInterval(intervalId);
    };

    const initEvents = () => {
      navDots.forEach((dot, index) => {
        dot.addEventListener('click', (event) => {
          event.preventDefault();
          setCurrent(index);
          changeSlide(index);
        });
      });
    };

    setCurret();
    initEvents();

    if (autoPlay) {
      const autoPlayHandler = handleAutoPlay();
      return () => autoPlayHandler();
    }
  }, [current, autoPlay, timeTrans, totalSlides]);


  return (
    <section id="about">
    <div className = "outerbox"> 
    <section className="intro">
      <div className="left">
        
         
          <h1 id='aboutush1'>ABOUT US</h1>
          
          
        
      </div>

      <div className="slider">
        <ul>
          <li
           
          >
            <div className="center-y" id='slider1'>
              <h3 id='abouth3'>STRATEGY</h3>
              <p id='aboutpara'>Helping companies planning and panning <br />out all related factors and <br />aspects of their business for <br /> "Razor-Sharp" focus on achieving their objectives.</p>
            </div>
          </li>
          <li
            
          >
            
            <div className="center-y" id='slider2'>
              <h3 id='abouth3'>MANAGEMENT</h3>
              <p id='aboutpara'>Guiding from the shadows and <br />managing at the forefront our <br />clients to achieve the targets and <br />objectives set based on the <br />Strategies developed "tailor-made" <br />for their specific needs.</p>
            </div>
            
          </li>
          <li
           
          >
            <div className="center-y" id='slider3'>
              <h3 id='abouth3'>SUPPORT</h3>
              <p id='aboutpara'>Lending a "helping-hand" through <br />all the way to the businesses <br />connected with us with every way <br /> we can to help fulfill their end-goals.</p>
            </div>
          </li>
        </ul>

        <ul>
          <nav id='aboutnav' >
            <span className='aboutspan'></span>
            <span className='aboutspan'></span>
            <span className='aboutspan'></span>
          </nav>
        </ul>
      </div>
    </section>
    </div>
    </section>
  );
};

export default About;
