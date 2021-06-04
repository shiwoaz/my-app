import React from 'react'

import LogoSvg from '../icons/LogoSvg'

interface ILeftMainHeader {

}

const LeftMainHeader: React.FC<ILeftMainHeader> = ({ }) => {
  return (
    <>
      <div className='flex justify-center items-center w-full h-36'>
        <LogoSvg classname=' fill-current text-yellow-100' width={100} height={100} />
      </div>
    </>
  )
}

export default LeftMainHeader
