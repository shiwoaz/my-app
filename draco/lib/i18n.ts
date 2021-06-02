import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import BackEnd from 'i18next-http-backend'

const init18 = () => {
  i18n
    .use(BackEnd)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'zh-CN',
      debug: true,
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false /* !!!! */
      }
    })
}

export default init18