import React, { useState } from 'react'
import Avatar from './Avatar'
import useUserInfo from './hooks/useUserInfo'

import PortalSettings from './PortalSettings'

interface IPeopleBar {

}

const PeopleBar: React.FC<IPeopleBar> = ({ }) => {

  const [visible, setVisible] = useState<boolean>(false)

  const userInfo = useUserInfo()

  return (
    <>
      <div className='w-full h-auto p-3 flex flex-row-reverse'>

        <Avatar
          url={userInfo?.user_avatar!}
          width='3rem' height='3rem'
          onClick={() => setVisible(true)}
          className='mr-6 block pt-2'
        />

        <PortalSettings visible={visible} onClose={() => setVisible(false)} />
      </div>
    </>
  )
}

export default PeopleBar
