import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import IsLogin from '../isLogin'
import Socket from '../Socket'
import Layout from '../layouts/layout'
import Connect from './Connect'
import ChatMain from '../../ui/ChatMain'
import Main from './Main'

interface IChat {

}

const ChatPage: React.FC<IChat> = ({ }) => {


  // const [io, user] = useJoinRoom(room as string)

  return (
    <IsLogin>
      <Socket>
        <Connect>
          <Layout>
            <Main />
          </Layout>
        </Connect>
      </Socket>
    </IsLogin>
  )
}

export default ChatPage
