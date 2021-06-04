import React from 'react'

import { info } from './MainContainer'
import Card from './Card'
import Avatar from './Avatar';

interface IRoomCard {
  room: info[]
}

const RoomCard: React.FC<IRoomCard> = ({
  room
}) => {

  console.log(room, "room");


  return (
    <>
      <Card className='bg-roomCard bg-opacity-50 mt-3 mb-3'>
        <div className='flex flex-col '>
          <span className='text-pink-100 text-lg font-mono subpixel-antialiased font-extrabold'>{room[0]['rooms']}</span>
          <div className='w-full h-16 flex flex-nowrap gap-2 items-center justify-between'>
            <div className='ml-3'>
              {
                room.slice(0, room.length > 5 ? 5 : room.length).map(({ user_avatar }) => <Avatar className='h-8 w-8 -ml-3' url={user_avatar} />)
              }
            </div>
            <div className='flex gap-2 justify-center items-center'>
              <div className='h-3 w-3 rounded-full bg-red-800'></div><span className='text-pink-100 text-lg font-mono'>{room.length}</span>
            </div>
          </div>
        </div>
      </Card>
    </>

  )
}

export default RoomCard
