import React from 'react'

import FullLayout from '../../ui/FullLayout'
import Header from '../../ui/MainHeader'
import MainContainer from '../../ui/MainContainer'
import Tabbar from '../../ui/Tabbar'
import useScreenType from '../../hooks/useScreenType'
import PeopleBar from '../../ui/PeopleBar'
import MainBotton from '../../ui/MainBotton'

const Main: React.FC = () => {

  const SCREENTYPE = useScreenType()

  return (
    <>
      <FullLayout classname='bg-chatRoom min-h-screen'>
        {
          SCREENTYPE !== "G" && <PeopleBar />
        }
        <Header />
        <MainContainer />
        {SCREENTYPE === "G" ? <Tabbar /> : null}
        {SCREENTYPE !== "G" ? <MainBotton /> : null}
      </FullLayout>
    </>
  )
}

export default Main