import React, { useEffect } from 'react'

import { useStore } from '../../store/hooks/useStore'
import IsLogin from '../isLogin'
import Layout from '../layouts/layout'
import Main from './Main'

const RoomPage: React.FC = () => {

  // const a = useStore((store: any) => ({
  //   id: store.id
  // }))
  // console.log(a);

  return (
    <>
      <IsLogin>
        <Layout>
          <Main />
        </Layout>
      </IsLogin>
    </>
  )
}



export default RoomPage