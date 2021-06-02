import { useTranslation } from 'react-i18next'

import { translateKey } from '../type/translateKey'

const useTranslate = () => {

  const { t } = useTranslation()

  return {
    t: (s: translateKey, d?: any) => t(s, d)
  }

}

export default useTranslate