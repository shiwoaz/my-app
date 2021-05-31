import React, { useEffect, useState } from 'react'

import Avatar from './Avatar'
import useUserInfo from './hooks/useUserInfo'
import Portal from './Portals'

interface ITabbar {

}

const Tabbar: React.FC<ITabbar> = ({

}) => {

  const userInfo = useUserInfo()

  const [visible, setVisible] = useState<boolean>(false)

  let timer

  const clickListener = (e: any) => {
    console.log(e);
    e.preventDefault()
    timer = null
    if (e.target.id !== 'portal') {
      setVisible(false)
      document.removeEventListener('click', clickListener)
      return
    }
  }

  const clickHandler = () => {
    document.addEventListener('click', clickListener)
  }

  return (
    <div className='w-full h-1/6 relative'>
      <div
        className=' h-3/6 absolute w-full bottom-0 flex flex-row-reverse pr-4'
      >
        <Avatar url={userInfo?.user_avatar!} height="3rem" width="3rem" onClick={() => {
          setVisible(true)
          timer = setTimeout(clickHandler);
        }} />
        <Portal visible={visible}>1</Portal>
      </div>
    </div>
  )
}


export default Tabbar
