import React from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
  visible: boolean
  ref?: React.ReactNode
}

const Portal: React.FC<IPortalProps> = ({
  visible,
  children
}) => {

  const Sub = (
    <div
      id="portal"
      className='absolute bg-red-400 w-3/5 overflow-x-hidden top-1/2 left-1/2 p-3 transition-all duration-100 ease-linear'
      style={{
        transform: 'translate(-50%,-50%)'
      }}
    >
      {children}
    </div>
  )



  if (!visible) return null

  return createPortal(Sub, document.querySelector('#__next')!)
}

export default Portal