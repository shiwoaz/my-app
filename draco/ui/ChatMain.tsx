import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import useGetRooms from './hooks/useGetRooms'
import SocketProvider from '../modules/content/socket'

interface IChatMain {

}

const ChatMain: React.FC<IChatMain> = ({ }) => {

  const { io } = useContext(SocketProvider)

  useEffect(() => {

    return () => {
      io?.emit('leaveRoom')
      console.log("leaveroom");
    }
  }, [])


  return (
    <>43</>
  )
}

export default ChatMain
