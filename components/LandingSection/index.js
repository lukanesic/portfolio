import React, { useState, useEffect } from 'react'
import { Cross as Hamburger } from 'hamburger-react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import linkedin from './../../public/linkedin.png'
import cv from './../../public/CV.png'
import git from './../../public/github.png'
import Image from 'next/image'

const LandingSection = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='landing-section'>
      <nav>
        <div className='nav-container wrapper'>
          <div className='nav-left'>
            <div className='logo'>
              <h1>
                ln. <span>Frontend Web Developer</span>
              </h1>
            </div>
          </div>

          <div className='nav-right'>
            <span>menu</span>
            <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
          </div>
        </div>
      </nav>

      <section className='emptydiv'></section>

      <section className='mid-section wrapper'>
        <div className='heading-animation-test'>
          <h1>I design & develop websites.</h1>
          <span className='subheading'>We make it happen</span>
        </div>
      </section>

      <section className='bot-section wrapper'>
        <div className='tech'>
          <p>
            I’ve work with React, CSS, Framer Motion and Webflow for UI/UX.{' '}
          </p>
          <p>Next.js for server side rendering and SEO.</p>
          <p>MongoDB for databases.</p>
        </div>
        <div className='socials'>
          <span className='mail'>lukannesic@gmail.com</span>
          <span className='icon'>
            <Image src={git} alt={'CV'} width={'25'} height={'25'} />{' '}
          </span>
          <span className='icon'>
            <Image src={linkedin} alt={'CV'} width={'25'} height={'25'} />{' '}
          </span>
          <span className='icon'>
            <Image src={cv} alt={'CV'} width={'25'} height={'25'} />{' '}
          </span>
        </div>
      </section>
    </div>
  )
}

export default LandingSection

const AnimatedTitle = () => {
  const characterAnimation = {
    hidden: {
      // opacity: 0,
      y: 10,
    },
    visible: {
      // opacity: 1,
      y: 0,
      // transition: {
      //   duration: 2,
      //   ease: [0.2, 0.65, 0.3, 0.9],
      // },
    },
  }

  const text = 'I design & develop websites'

  const ctrls = useAnimation()

  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      console.log('Vidi se ')
      ctrls.start('visible')
    }
    if (!inView) {
      console.log('Ne vidi se')
      ctrls.start('hidden')
    }
  }, [inView, ctrls])

  return (
    // <motion.span
    //   className='heading'
    //   ref={ref}
    //   initial='hidden'
    //   animate={ctrls}
    //   variants={characterAnimation}
    // >
    //   {text}
    // </motion.span>
    <>
      {text.split('').map((char, index) => (
        <motion.span
          aria-hidden='true'
          className='heading'
          key={index}
          ref={ref}
          initial='hidden'
          animate={ctrls}
          variants={characterAnimation}
        >
          {char}
        </motion.span>
      ))}
    </>
  )
}
