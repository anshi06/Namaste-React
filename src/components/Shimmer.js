import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
        {Array.apply(null, Array(10)).map((each, index) => <div key={index} className="h-[400] w-[300] bg-gray-300 m-2"></div>)}
    </div>
  )
}

export default Shimmer;
