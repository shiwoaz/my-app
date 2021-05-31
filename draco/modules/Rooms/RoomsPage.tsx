import React, { useEffect } from 'react'

import { useStore } from '../../store/hooks/useStore'
import IsLogin from '../isLogin'
import Layout from '../layouts/layout'
import FullLayout from '../../ui/FullLayout'

const RoomPage: React.FC = () => {

  const a = useStore((store: any) => ({
    id: store.id
  }))
  console.log(a);

  return (
    <>
      <IsLogin>
        <Layout>
          <FullLayout classname='bg-chatRoom 1'>
            123
          </FullLayout>
        </Layout>
      </IsLogin>
    </>
  )
}



export default RoomPage