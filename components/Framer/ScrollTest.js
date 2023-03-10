import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'

const ScrollTest = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    container: ref,
  })

  return (
    <>
      <motion.div
        className='progress-bar'
        style={{ scaleX: scrollYProgress }}
      />
      <motion.div className='scroll-test-lg' ref={ref}>
        <div className='scroll-test-sm'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </motion.div>
    </>
  )
}

export default ScrollTest
