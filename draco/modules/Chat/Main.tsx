import React from 'react'
import { useRouter } from 'next/router'

import FullLayout from '../../ui/FullLayout'
import useGetRooms from '../../ui/hooks/useGetRooms'
import ChatMain from '../../ui/ChatMain'

const Main: React.FC = () => {

  const { query: { room: roomId } } = useRouter()

  const room = useGetRooms(false, roomId as string)

  console.log(room, "chat main");

  return (
    <>
      <FullLayout classname='bg-chatRoom min-h-screen'>
        <ChatMain />
      </FullLayout>
    </>
  )
}

export default Main