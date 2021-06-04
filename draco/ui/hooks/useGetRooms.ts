import { useEffect, useState } from 'react'
import { APIURL } from '../../settings/Global'

const useGetRooms = (flag: boolean) => {

  const [rooms, setRooms] = useState({})

  const getRooms = async () => {
    const res = await fetch(APIURL + '/room/query')
    const c = await res.json()
    setRooms(c)
  }

  useEffect(() => {
    getRooms()
  }, [flag])

  return rooms
}

export default useGetRooms