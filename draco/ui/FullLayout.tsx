import React from 'react'

const FullLayout: React.FC = ({
  children
}) => {
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
        {children}
      </div>
    </>
  )
}

export default FullLayout