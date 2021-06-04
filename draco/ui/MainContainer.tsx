import React, { useContext, useEffect, useState } from 'react';

//@ts-ignore
import Event from 'reactjs-eventemitter'

import SocketContext from '../modules/content/socket'
import useGetRooms from './hooks/useGetRooms';
import RoomCard from './RoomCard';

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

  const { io } = useContext(SocketContext)

  console.log(io, 123);

  const [flag, setFlag] = useState(false)

  useEffect(() => {

    Event.subscribe('reFetch', () => setFlag(!flag))

    return () => {

    }
  }, [])

  const rooms = useGetRooms(flag) as rooms


  return (
    <>
      <div id="container_m" className='h-4/6 shadow-xl w-11/12 mx-auto bg-roomBgC bg-opacity-50 p-2 rounded-md overflow-scroll'>
        {
          Object.keys(rooms).map(item => {
            if (item.length !== 20 && item !== 'undefined') {
              return (
                <RoomCard key={item} room={rooms[item]} />
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
