import Image from 'next/image'
import React, { useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Project = ({ src, title, company, tech, reverse }) => {
  // 1.

  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  const ctrls = useAnimation()

  useEffect(() => {
    if (inView) {
      console.log(`${company} se vidi`)
      ctrls.start('visible')
    }
    if (!inView) {
      console.log(`${company} se ne vidi`)
      ctrls.start('hidden')
    }
  }, [inView, ctrls, company])

  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      initial='hidden'
      animate={ctrls}
      variants={variants}
      className={`project wrapper ${reverse && 'project-reverse'}`}
      ref={ref}
    >
      <div className='img'>
        <Image src={src} fill style={{ objectFit: 'cover' }} alt={title} />
      </div>
      <div className='info'>
        <h4>{company}</h4>
        <h2>{title}</h2>
        <h6>{tech}</h6>
      </div>
    </motion.div>
  )
}

export default Project
