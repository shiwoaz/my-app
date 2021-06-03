import { createContext } from 'react'
import { Socket } from 'socket.io-client/build/socket'

const SocketIO = createContext<{
  //@ts-ignore
  io: Socket<DefaultEventsMap, DefaultEventsMap> | null,
  setIO?: null
}>({
  io: null,
  setIO: null
})

export default SocketIO