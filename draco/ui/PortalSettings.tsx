import React, { useRef, useState } from 'react'

import useTranslate from '../hooks/useTranslate'
import LanguageSvg from '../icons/LanguageSvg'
import LoginOutSvg from '../icons/LoginOutSvg'
import PersonSvg from '../icons/PersonSvg'
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

  const { t } = useTranslate()

  const ref = useRef<HTMLDivElement>(null)

  const [subVisible, setSubVisible] = useState<boolean>(false)

  return (
    <>
      <Portal visible={visible} onClose={onClose} clasName='bg-gray-800 rounded-lg'>
        <>
          {/* left */}
          <div
            ref={ref}
            id="setitng"
            className='overflow-auto w-full text-indigo-50 font-sans p-2'
          >
            <Button className='flex text-center w-full'>
              <PersonSvg classname='fill-current text-green-600' />&nbsp;&nbsp;<span>{t('setting.Space')}</span>
            </Button><br />
            <Button className='flex text-center w-full'
              onClick={() => setSubVisible(true)}
            >
              <LanguageSvg classname='fill-current text-green-600' />&nbsp;&nbsp;<span>语言</span>
            </Button><br />
            <Button className='flex text-center w-full'>
              <LoginOutSvg classname='fill-current text-green-600' />&nbsp;&nbsp;<span>登出</span>
            </Button>
          </div>
        </>
      </Portal>

      <Portal
        visible={subVisible}
        onClose={() => setSubVisible(false)}
        anchorEl={ref.current!}
        clasName='bg-gray-800 rounded-lg'
      >
        <div className='h-full'>
          332
      </div>
      </Portal>

    </>
  )
}

export default PortalSettings
