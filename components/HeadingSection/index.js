import React from 'react'

const HeadingSection = ({ title, paragraph }) => {
  return (
    <div className='heading-section wrapper'>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  )
}

export default HeadingSection
