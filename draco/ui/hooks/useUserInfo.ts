import { useEffect, useState } from 'react'
import { localGet } from '../../lib/localStorage'

export type UserInfo = {
  date: string
  user_avatar: string
  user_name: string
}

const useUserInfo = () => {

  const [info, setInfo] = useState<UserInfo>()

  useEffect(() => {
    const { data } = JSON.parse(localGet('info') || {})
    setInfo(data)
  },[])

  return info
}

export default useUserInfo