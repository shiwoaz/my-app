import React, { useState, useContext } from 'react'

//@ts-ignore
import Event from 'reactjs-eventemitter'

import Button from './Button'
import Input from './Input'
import Portal from './Portals'
import SocketProvider from '../modules/content/socket'
import useUserInfo from './hooks/useUserInfo'
import { useRouter } from 'next/router'
import useTranslate from '../hooks/useTranslate'

interface ICreateRoom {
  visible: boolean
  onClose: () => void
}

const CreateRoom: React.FC<ICreateRoom> = ({
  visible,
  onClose
}) => {

  const [roomName, setRoomName] = useState<string>('')

  const { io } = useContext(SocketProvider)

  const user = useUserInfo()

  const { replace } = useRouter()

  const { t } = useTranslate()

  return (
    <>
      <Portal visible={visible} onClose={onClose} clasName='bg-gray-800 rounded-lg '>
        <>
          <div className='h-56 flex flex-col justify-around items-center'>
            <div className='h-24 flex flex-col justify-around items-start'>
              <span className='text-purple-300 text-center'>{t('main.roomName')}</span>
              <Input type='text' onChange={(v) => setRoomName(v.target.value)} />
            </div>
            <Button
              className='bg-create font-mono p-3 rounded-md bg-opacity-70 text-pink-100 text-center text-lg font-extrabold'
              onClick={() => {
                if (roomName.length === 0) {
                  console.log('no name');
                  return
                }
                // io?.emit('join', { user, roomName })
                replace('/chat/[name]', `/chat/${roomName}`)
                //refetch room info
                Event.dispatch("reFetch", '')

                onClose()
              }}
            >
              {t('main.create')}
            </Button>
          </div>
        </>
      </Portal>
    </>
  )
}

export default CreateRoom
