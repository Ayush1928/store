import React from 'react'
import { useLocation } from 'react-router-dom'

const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className='success-container'>
      <h1 className="success">
        Successfull !
      </h1>
    </div>
  )
}

export default Success
