import Image from 'next/image'
import React from 'react'

import linkedin from './../../public/linkedin.png'
import cv from './../../public/CV.png'
import git from './../../public/github.png'

const Footer = () => {
  return (
    <footer>
      <div className='wrapper'>
        <h1>{`What can i do for you?`}</h1>
        <div className='hor-line'></div>
        <p>Get in touch for opportunities or just say hi!</p>

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

        <div className='credits'>
          <h4>© 2023 - Luka Nesic </h4>
          <h4>|</h4>
          <h4>Site on Next.js</h4>
        </div>
      </div>
      {/* <h1>{`Let's Connect!`}</h1> */}
    </footer>
  )
}

export default Footer
