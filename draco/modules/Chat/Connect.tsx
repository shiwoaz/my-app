import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import useJoinRoom from './hook/useJoinRoom'
import useUserInfo from '../../ui/hooks/useUserInfo'
import SocketContext from '../content/socket'

interface IConnect {

}

const Connect: React.FC<IConnect> = ({
  children
}) => {

  const { query } = useRouter()

  const { name: room } = query

  // const [io, user] = useJoinRoom(room as string)

  // console.log(io, user);

  const { io } = useContext(SocketContext)

  const user = useUserInfo()

  useEffect(() => {

    console.log(room, "123");

    io?.emit('join', { user, roomName: room })



  })



  return (
    <>{children}</>
  )
}

export default Connect
