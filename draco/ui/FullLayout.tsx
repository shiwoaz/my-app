import React, { useEffect, useState } from 'react'

const FullLayout: React.FC = ({
  children
}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true)
  })

  return (
    <>
      {
        mounted && (
          <div className='w-screen h-screen flex justify-center items-center'>
            {children}
          </div>
        )
      }
    </>
  )
}

export default FullLayout