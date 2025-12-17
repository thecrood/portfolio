import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { bwmap, worldmap } from '../assets';

const values = ['Agentic AI Expert','Software Engineer', 'Python Developer', 'Data Engineer'];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLetterIndex(0);
      setCurrentWord('');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 5000); // 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentLetterIndex < values[currentIndex].length) {
        setCurrentWord((prevWord) => prevWord + values[currentIndex][currentLetterIndex]);
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      }
    }, 100); // Adjust speed as needed

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount or next iteration
  }, [currentIndex, currentLetterIndex]);

  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase"
              >
                Rohit
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 #1f1f1f`}>
            <br className="sm:block hidden" />
              {currentWord}
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        {/* <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={}
            alt=""
          />
        </div> */}
      </section>
    </>
  );
};

export default Hero;
