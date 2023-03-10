import React, { useEffect } from 'react'
import { useRef, useState } from 'react'

const Test = () => {
  const [offWidth, setOffWith] = useState()
  const [offWidth1, setOffWith1] = useState()
  const ref1 = useRef()
  const ref2 = useRef()

  const [getBounding, setGetBounding] = useState()
  const boundingRef = useRef()

  //   console.log(`Off width 1: ${offWidth}`)
  //   console.log(`Off width 2: ${offWidth1}`)

  //   useEffect(() => {
  //     console.log(`Inner width: ${window.innerWidth}`)
  //   })

  useEffect(() => {
    console.log(getBounding)
  })

  return (
    <>
      {/* {' '}
      <div
        ref={ref1}
        className='offsetWidth'
        style={{
          border: '1px solid red',
        }}
      >
        <button onClick={() => setOffWith(ref1.current.offsetWidth)}>
          Set offsetWidth
        </button>
      </div>
      <div
        ref={ref2}
        className='windowInnerWidth'
        style={{
          border: '1px solid red',
          width: '200vw',
        }}
      >
        <h1>Window InnerWidth</h1>
        <button onClick={() => setOffWith1(ref2.current.offsetWidth)}>
          Set offsetWidth
        </button>
      </div> */}
      <div
        ref={boundingRef}
        className='getBoundingClientRect'
        style={{
          border: '1px solid red',
          width: '200vw',
          height: '50vh',
        }}
      >
        <h1>getBoundingClientRect</h1>
        <button
          onClick={() =>
            setGetBounding(boundingRef.current.getBoundingClientRect())
          }
        >
          setBounding
        </button>
      </div>
    </>
  )
}

export default Test
