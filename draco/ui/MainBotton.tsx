import React, { useState } from 'react'
import Button from './Button'
import CreateRoom from './CreateRoom'

interface IMainBotton {

}

const MainBotton: React.FC<IMainBotton> = () => {

  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <div className='w-full h-auto relative'>
        <Button onClick={() => setVisible(true)} className='bg-indigo-400 p-3 rounded-full absolute right-8 top-4'>创建房间</Button>
        <CreateRoom visible={visible} onClose={() => setVisible(false)} />
      </div>
    </>
  )
}

export default MainBotton
