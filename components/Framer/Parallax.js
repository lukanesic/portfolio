import React, { useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Parallax = () => {
  const { scrollYProgress } = useScroll()

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 5])
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['0deg', '45deg', '0deg']
  )

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      console.log('in view')
      control.start({
        scale: 1.5,
        transition: {
          duration: 0.5,
          delay: 1,
        },
      })
    } else {
      console.log('out of view')
      control.start({
        scale: 1,
      })
    }
  }, [inView, control])

  return (
    <motion.div
      className='parallax-container'
      onScroll={() => console.log(y.get())}
    >
      <h1>Parallax 1</h1>
      <motion.h3 style={{ y, scale }}>Parallax 2</motion.h3>
      <motion.h5 style={{ y, scale }}>Parallax 3</motion.h5>
      <motion.div className='box' ref={ref} animate={control} />
      <motion.h6 style={{ scale }}>Parallax 4</motion.h6>
    </motion.div>
  )
}

export default Parallax
