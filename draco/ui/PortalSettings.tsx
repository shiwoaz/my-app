import React, { useRef, useState } from 'react'
import Button from './Button'

import Portal from './Portals'

interface IPortalSettingsProps {
  visible: boolean
  onClose: () => void
}

const PortalSettings: React.FC<IPortalSettingsProps> = ({
  visible,
  onClose
}) => {

  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
      <Portal visible={visible} onClose={onClose}>
        <>
          {/* left */}
          <div
            ref={ref}
            id="setitng"
            className='overflow-auto w-full'
          >
            <span>asd</span>
          </div>
        </>
      </Portal>
    </>
  )
}

export default PortalSettings
