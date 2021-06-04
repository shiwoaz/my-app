import { useContext, useEffect } from 'react'
import isServer from '../../../lib/isServer'
import useUserInfo from '../../../ui/hooks/useUserInfo'

import Socket from '../../content/socket'

const useJoinRoom = (room: string) => {

  if (!isServer) return []

  const { io } = useContext(Socket)

  const user = useUserInfo()

  useEffect(() => {

    console.log(room, "123");

    io?.emit('join', { user, roomName: room })

  })

  return [io, user]
}

export default useJoinRoom