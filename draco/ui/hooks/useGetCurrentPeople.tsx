import { useEffect, useState } from 'react'
import { APIURL } from '../../settings/Global'

export type CurrentUser = {
  id: string
  user_name: string
  user_avatar: string
  rooms?: string
}

const useGetCurrentPeople = () => {

  const [currentUser, setCurrentUser] = useState<CurrentUser[]>([])

  const getCurrent = async () => {
    const res = await fetch(
      `${APIURL}/room/current`,
      {
        method: "GET"
      }
    )

    const { user } = await res.json()
    setCurrentUser(user)
    console.log(user, "online");

  }

  useEffect(() => {
    getCurrent()
  }, [])


  return currentUser
}

export default useGetCurrentPeople