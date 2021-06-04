import React from 'react'

interface ILeft {

}

const Left: React.FC<ILeft> = ({ children }) => {
  return (
    <>
      <div className='w-1/4 bg-red-300'>
        {children}
      </div>
    </>
  )
}

export default Left
