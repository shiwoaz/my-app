import React, { useEffect, useRef, useState, useContext } from 'react'

import Avatar from './Avatar'
import Button from './Button'
import useUserInfo from './hooks/useUserInfo'
import Portal from './Portals'
import PortalSettings from './PortalSettings'
import SocketProvider from '../modules/content/socket'
import CreateRoom from './CreateRoom'
import useTranslate from '../hooks/useTranslate'

interface ITabbar {

}

const Tabbar: React.FC<ITabbar> = ({

}) => {

  const userInfo = useUserInfo()

  const [visible, setVisible] = useState<boolean>(false)
  const [roomVisible, setRoomVisible] = useState<boolean>(false)

  const { io } = useContext(SocketProvider)

  const { t } = useTranslate()

  // let timer

  // const clickListener = (e: any) => {
  //   console.log(e);
  //   timer = null
  //   if (e.target.id !== 'portal') {
  //     setVisible(false)
  //     document.removeEventListener('click', clickListener)
  //     return
  //   }
  // }

  // const clickHandler = () => {
  //   document.addEventListener('click', clickListener)
  // }

  return (
    <div className='w-full h-1/6 relative'>
      <div
        className=' h-3/6 absolute w-full bottom-0 flex flex-row-reverse pr-4'
      >
        <Avatar url={userInfo?.user_avatar!} height="3rem" width="3rem" onClick={() => {
          setVisible(true)
          // timer = setTimeout(clickHandler);
        }} />

        <PortalSettings
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
        />
      </div>

      <Button
        onClick={() => setRoomVisible(true)}
        className='bg-create font-mono p-3 rounded-md bg-opacity-70 text-pink-100 text-center text-lg font-extrabold absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2'
      >
        {t('main.createRoom')}
      </Button>
      <CreateRoom visible={roomVisible} onClose={() => setRoomVisible(false)} />
    </div>
  )
}


export default Tabbar
