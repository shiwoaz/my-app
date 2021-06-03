import React, { useContext, useEffect } from 'react'
import { io } from 'socket.io-client'

import SocketProvider from './content/socket'
import { APIURL } from '../settings/Global'

const Socket: React.FC = ({
  children
}) => {

  const { io: sock } = useContext(SocketProvider)
  //@ts-ignore
  let ser: Socket<DefaultEventsMap, DefaultEventsMap> | null

  useEffect(() => {

    ser = io(APIURL)

    ser.emit('join', {}, (err: any) => {
      console.log(err);
    })

  }, [])

  return (
    <>
      <SocketProvider.Provider value={{ io: ser }}>
        {children}
      </SocketProvider.Provider>
    </>
  )
}

Socket.displayName = 'Socket.io'

export default Socket