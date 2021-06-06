import React, { useContext } from 'react'

import Card from './Card'
import useGetCurrentPeople, { CurrentUser } from './hooks/useGetCurrentPeople'
import useUserInfo from './hooks/useUserInfo'
import PeopleCard from './PeopleCard'
import SocketProvider from '../modules/content/socket'

interface IOnlinPeopleCard {

}

const OnlinPeopleCard: React.FC<IOnlinPeopleCard> = () => {

  const user = useUserInfo()

  const { io } = useContext(SocketProvider)


  const current = [...useGetCurrentPeople(), { ...user, id: io?.id ?? new Date().getMilliseconds() }] as CurrentUser[]


  return (
    <div className='w-4/5 mt-0 ml-auto mr-auto text-yellow-100 text-opacity-70 h-full'>
      <Card className='border-gray-800 bg-opacity-70 flex flex-col'>
        <div>
          <span>当前在线: {current.length}人</span>
        </div>
        <div>
          {
            current.map(item => {
              const { user_name: name, user_avatar: avatar, rooms, id } = item
              console.log(name, avatar, rooms, "534", item);
              return (
                <PeopleCard key={id} name={name} avatar={avatar} room={rooms} />
              )
            })
          }
        </div>
      </Card>
    </div>
  )
}

export default OnlinPeopleCard
