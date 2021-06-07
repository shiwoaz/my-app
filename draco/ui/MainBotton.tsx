import React, { useState } from 'react'

import useTranslate from '../hooks/useTranslate'
import Button from './Button'
import CreateRoom from './CreateRoom'

interface IMainBotton {

}

const MainBotton: React.FC<IMainBotton> = () => {

  const [visible, setVisible] = useState<boolean>(false)

  const { t } = useTranslate()

  return (
    <>
      <div className='w-full h-auto relative'>
        <Button onClick={() => setVisible(true)} className='bg-indigo-400 p-3 rounded-full absolute right-8 top-4'>{t('main.createRoom')}</Button>
        <CreateRoom visible={visible} onClose={() => setVisible(false)} />
      </div>
    </>
  )
}

export default MainBotton
