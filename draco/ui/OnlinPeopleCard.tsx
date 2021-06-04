import React from 'react'
import Card from './Card'

interface IOnlinPeopleCard {

}

const OnlinPeopleCard: React.FC<IOnlinPeopleCard> = () => {
  return (
    <div className='w-4/5 mt-0 ml-auto mr-auto text-yellow-100 text-opacity-70'>
      <Card className='border-gray-800 bg-opacity-70 flex flex-col'>
        <div>
          <span>当前在线人数:</span>
        </div>
        <div>
          123
        </div>
      </Card>
    </div>
  )
}

export default OnlinPeopleCard
