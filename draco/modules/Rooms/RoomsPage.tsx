import React, { useContext, useEffect } from 'react'

import { useStore } from '../../store/hooks/useStore'
import IsLogin from '../isLogin'
import Layout from '../layouts/layout'
import Main from './Main'
import SocketProvider from '../content/socket'
import Socket from '../Socket'
import LeftMain from '../../ui/LeftMain'
import RightMain from '../../ui/RightMain'

const RoomPage: React.FC = () => {

  // const a = useStore((store: any) => ({
  //   id: store.id
  // }))
  // console.log(a);

  const { io } = useContext(SocketProvider)

  return (
    <>
      <IsLogin>
        <Socket>
          <Layout
            Left={<LeftMain />}
            Right={<RightMain />}
          >
            <Main />
          </Layout>
        </Socket>
      </IsLogin>
    </>
  )
}



export default RoomPage