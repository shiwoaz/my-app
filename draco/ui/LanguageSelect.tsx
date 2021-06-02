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
    { vlaue: 'zh-CN', label: t('language.zh-CN'), flag: '🇨🇳' },
    { vlaue: 'zh-TW', label: t('language.zh-TW'), flag: '🇨🇳' },
    { vlaue: 'ar', label: t('language.ar'), flag: '🇦🇪' },
    { vlaue: 'en', label: t('language.en'), flag: '🇺🇸' },
    { vlaue: 'es', label: t('language.es'), flag: '🇪🇸' },
    { vlaue: 'fr', label: t('language.fr'), flag: '🇫🇷' },
    { vlaue: 'ru', label: t('language.ru'), flag: '🇷🇺' },
    { vlaue: 'ja', label: t('language.ja'), flag: '🇯🇵' },
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
