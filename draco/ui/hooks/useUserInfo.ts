import { useEffect, useState } from 'react'
import { localGet } from '../../lib/localStorage'

export type UserInfo = {
  date?: string
  user_avatar?: string
  user_name?: string
}

export type useUserInfoHook = () => UserInfo

const useUserInfo: useUserInfoHook = () => {

  const [info, setInfo] = useState<UserInfo>({})

  useEffect(() => {
    const { data } = JSON.parse(localGet('info') || {})
    setInfo(data)
  }, [])

  return info
}

export default useUserInfo