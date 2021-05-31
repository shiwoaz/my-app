import React from 'react'

import FullLayout from '../../ui/FullLayout'
import Header from '../../ui/MainHeader'
import MainContainer from '../../ui/MainContainer'
import Tabbar from '../../ui/Tabbar'
import useScreenType from '../../hooks/useScreenType'

const Main: React.FC = () => {

  const SCREENTYPE = useScreenType()

  return (
    <>
      <FullLayout classname='bg-chatRoom min-h-screen'>
        <Header />
        <MainContainer />
        {SCREENTYPE === "G" ? <Tabbar /> : null}
      </FullLayout>
    </>
  )
}

export default Main