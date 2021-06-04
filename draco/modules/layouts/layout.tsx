import React, { ReactNode } from 'react'

import useScreenType from '../../hooks/useScreenType'

export interface LayoutProps {
  Left?: ReactNode,
  Right?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  children,
  Left,
  Right
}) => {

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
    ui = (
      <div className='flex flex-nowrap w-screen h-screen'>
        {Left}
        {children}
      </div>
    )
  }

  return (
    <>
      {ui}
    </>
  )
}

export default Layout