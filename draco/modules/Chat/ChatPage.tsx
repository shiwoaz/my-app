import React, { useContext, useEffect } from 'react'

import { useRouter } from 'next/router'
import IsLogin from '../isLogin'
import Socket from '../Socket'
import Layout from '../layouts/layout'
import useJoinRoom from './hook/useJoinRoom'
import SocketProvider from '../content/socket'
import useUserInfo from '../../ui/hooks/useUserInfo'
import Connect from './Connect'

interface IChat {

}

const ChatPage: React.FC<IChat> = ({ }) => {


  // const [io, user] = useJoinRoom(room as string)

  return (
    <IsLogin>
      <Socket>
        <Connect>
          <Layout>
          </Layout>
        </Connect>
      </Socket>
    </IsLogin>
  )
}

export default ChatPage
