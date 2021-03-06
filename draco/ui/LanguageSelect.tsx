import React from 'react'

import { useTranslation } from 'react-i18next'
import useTranslate from '../hooks/useTranslate'

import Button from './Button'

interface ILanguageSelect {
  onClose: () => void
}

const LanguageSelect: React.FC<ILanguageSelect> = ({
  onClose
}) => {

  const { i18n } = useTranslation()

  const { t } = useTranslate()

  const LANGUAGES = [
    { vlaue: 'zh-CN', label: t('language.zh-CN'), flag: 'π¨π³' },
    { vlaue: 'zh-TW', label: t('language.zh-TW'), flag: 'π¨π³' },
    { vlaue: 'ar', label: t('language.ar'), flag: 'π¦πͺ' },
    { vlaue: 'en', label: t('language.en'), flag: 'πΊπΈ' },
    { vlaue: 'es', label: t('language.es'), flag: 'πͺπΈ' },
    { vlaue: 'fr', label: t('language.fr'), flag: 'π«π·' },
    { vlaue: 'ru', label: t('language.ru'), flag: 'π·πΊ' },
    { vlaue: 'ja', label: t('language.ja'), flag: 'π―π΅' },
  ]

  return (
    <>
      <div className='h-72 overflow-y-scroll'>
        {
          LANGUAGES.map(item => (
            <Button key={item.vlaue} className='w-full flex p-2' onClick={() => {
              i18n.changeLanguage(item.vlaue)
              onClose()
            }}>
              <span className='truncate text-center leading-none'>{item.flag}&nbsp;&nbsp;&nbsp;{item.label}</span>
            </Button>
          ))
        }
      </div>

    </>
  )
}

export default LanguageSelect
