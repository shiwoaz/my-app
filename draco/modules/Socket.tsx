import React, { useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import SocketProvider from './content/socket'
import { APIURL } from '../settings/Global'

const Socket: React.FC = ({
  children
}) => {

  const { io: sock } = useContext(SocketProvider)
  //@ts-ignore
  // let ser: Socket<DefaultEventsMap, DefaultEventsMap> | null

  const [ser, setSer] = useState(null)

  useEffect(() => {

    const ser = io(APIURL)

    setSer(ser as unknown as any)

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