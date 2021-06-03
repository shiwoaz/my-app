import { GetServerSideProps } from 'next';
import React, { useContext, useEffect, useState } from 'react';

import SocketContext from '../modules/content/socket'
import { APIURL } from '../settings/Global';

interface IMainContainer {
}

const MainContainer: React.FC<IMainContainer> = ({

}) => {

  const { io } = useContext(SocketContext)

  console.log(io, 123);

  const [rooms, setRooms] = useState<Array<any>>([])

  const getRooms = async () => {
    const res = await fetch(APIURL + '/room/query')
    const c = await res.json()
    setRooms(c)
  }

  useEffect(() => {
    getRooms()
    return () => {

    }
  }, [])


  return (
    <>
      <div id="container_m" className='h-4/6 shadow-xl w-11/12 mx-auto bg-roomBgC bg-opacity-50 p-2 rounded-md overflow-scroll'>
        123
        {
          rooms.map(item => (
            <span>{item[0]}</span>
          ))
        }
      </div>
    </>
  )
};

export default MainContainer;
