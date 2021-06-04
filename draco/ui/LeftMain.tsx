import React from 'react'
import LogoSvg from '../icons/LogoSvg'
import LeftMainBody from './LeftMainBody'
import LeftMainHeader from './LeftMainHeader'

interface ILeftMain {

}

const LeftMain: React.FC<ILeftMain> = ({ }) => {
  return (
    <>
      <div className='w-1/4 bg-chatRoom bg-opacity-80 h-screen'>
        <LeftMainHeader />
        <LeftMainBody />
      </div>
    </>
  )
}

export default LeftMain
