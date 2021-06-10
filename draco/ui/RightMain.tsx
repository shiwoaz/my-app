import React from 'react'
import Avatar from './Avatar'
import Card from './Card'
import useUserInfo from './hooks/useUserInfo'

export interface IRightMain {

}

const RightMain: React.FC<IRightMain> = ({

}) => {

  const { user_name, user_avatar } = useUserInfo()

  return (
    <>
      <div className='w-1/4 bg-chatRoom  border-l-1 border-gray-900 h-screen flex flex-col justify-around'>
        <Card className='bg-rightCard bg-opacity-50  text-yellow-50'>
          <div className='flex items-center gap-4'>
            <Avatar url={user_avatar!} width='4rem' height='4rem' />
            <span className='text-lg font-mono'>{user_name}</span>
          </div>
        </Card>

        <Card className='bg-rightCard bg-opacity-50 text-yellow-50'>
          123
        </Card>
      </div>
    </>
  )
}

export default RightMain