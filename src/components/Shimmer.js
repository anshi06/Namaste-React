import React from 'react'

const Shimmer = () => {
  return (
    <div className='shimmer-container'>
        {Array.apply(null, Array(10)).map((each, index) => <div key={index} className='shimmer-card'>Hello</div>)}
    </div>
  )
}

export default Shimmer;
