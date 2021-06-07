import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'

//@ts-ignore
import Event from 'reactjs-eventemitter'

import SocketContext from '../modules/content/socket'
import useGetRooms from './hooks/useGetRooms';
import useUserInfo from './hooks/useUserInfo';
import RoomCard from './RoomCard';
import { localGet } from '../lib/localStorage';

interface IMainContainer {
}

export type rooms = {
  [k in string]: Array<info>
}

export type info = {
  id: string
  user_name: string
  user_avatar: string
  rooms: string
}

const MainContainer: React.FC<IMainContainer> = ({

}) => {

  const { replace } = useRouter()

  const { io } = useContext(SocketContext)

  console.log(io, 123);

  const [flag, setFlag] = useState(false)


  useEffect(() => {

    Event.subscribe('reFetch', () => setFlag(!flag))

    const { data } = JSON.parse(localGet('info') || {})
    io?.emit('main', { user: data })

    return () => {
      io?.emit('leaveMain')
    }
  }, [])

  const rooms = useGetRooms(flag) as rooms



  return (
    <>
      <div id="container_m" className='h-4/6 shadow-xl w-11/12 mx-auto bg-roomBgC bg-opacity-50 p-2 rounded-md overflow-auto' style={{
        scrollbarWidth: 'none',
      }}>
        {
          Object.keys(rooms).map(item => {
            if (item.length !== 20 && item !== 'undefined') {
              return (
                <RoomCard
                  key={item}
                  room={rooms[item]}
                  onClick={() => {
                    console.log(item, "item");
                    replace('/chat/[name]', `/chat/${item}`)
                    // io?.emit('join', { user, roomName: item })
                  }}
                />
              )
            }
            return null
          })
        }
      </div>
    </>
  )
};

export default MainContainer;
