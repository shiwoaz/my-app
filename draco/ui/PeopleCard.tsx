import React from 'react'
import useTranslate from '../hooks/useTranslate'
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

  const { t } = useTranslate()

  return (
    <>
      <Card className=' bg-gray-500 flex flex-nowrap items-center h-auto mt-2 mb-2 gap-1 text-sm justify-between'>
        <div className='flex flex-nowrap w-auto gap-2'>
          <div>
            <Avatar url={avatar} height='2.5rem' width='2.5rem' />
          </div>
          <div className='flex flex-col justify-between'>
            <span>{name}</span>
            <span className='truncate'><span className='mr-1'>{t('main.position')}:</span>{room ? <span>{room}</span> : <span>{t('main.hall')}</span>}</span>
          </div>
        </div>
        <div className='w-2 h-2 bg-green-500 bg-opacity-75 rounded-full ml-2.5'></div>
      </Card>
    </>
  )
}

export default PeopleCard
