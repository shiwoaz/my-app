import React from 'react'
import Avatar from './Avatar'
import Card from './Card'

interface IPeopleCard {
  name: string
  avatar: string
  room?: string
}

const PeopleCard: React.FC<IPeopleCard> = ({
  name,
  avatar,
  room
}) => {
  return (
    <>
      <Card className=' bg-gray-500 flex flex-nowrap items-center h-auto mt-2 mb-2 gap-1 text-sm'>
        <div>
          <Avatar url={avatar} height='2.5rem' width='2.5rem' />
        </div>
        <div className='flex flex-col justify-between'>
          <span>{name}</span>
          <span className='truncate'><span className='mr-1'>位置:</span>{room ? <span>{room}</span> : <span>大厅</span>}</span>
        </div>
        <div className='w-2 h-2 bg-green-500 bg-opacity-75 rounded-full ml-2.5'></div>
      </Card>
    </>
  )
}

export default PeopleCard
