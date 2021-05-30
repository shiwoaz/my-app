import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'

import { useStore } from '../../store/hooks/useStore'
import IsLogin from '../isLogin'
import useScreenType from '../../hooks/useScreenType'

const RoomPage: React.FC = () => {

  const a = useStore((store: any) => ({
    id: store.id
  }))
  console.log(a);

  const screenType = useScreenType()

  let ui = null

  if (screenType === "G") {
    ui = (1)
  }
  if (screenType === "G-1") {
    ui = (2)
  }
  if (screenType === "G-2") {
    ui = (3)
  }
  if (screenType === "G-3") {
    ui = (4)
  }


  return (
    <>
      <IsLogin>
        Rooms Page {screenType} {ui}
      </IsLogin>
    </>
  )
}



export default RoomPage