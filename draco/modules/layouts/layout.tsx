import React, { useEffect } from 'react'

import useScreenType from '../../hooks/useScreenType'

const Layout: React.FC = ({ children }) => {

  const SCRENTYPE = useScreenType()

  let ui = null

  if (SCRENTYPE === "G") {
    ui = children
  }
  if (SCRENTYPE === "G-1") {
    ui = (2)
  }
  if (SCRENTYPE === "G-2") {
    ui = (3)
  }
  if (SCRENTYPE === "G-3") {
    ui = (4)
  }

  return (
    <>
      {ui}
    </>
  )
}

export default Layout