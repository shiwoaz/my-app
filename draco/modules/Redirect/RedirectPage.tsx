import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import isServer from '../../lib/isServer'
import Loading from '../../ui/RedrectLoading'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import searchParase from '../../lib/searchParase'
import localStor from '../../lib/localStorage'
import { useStore } from '../../store/hooks/useStore'
import { serverStore, stateType } from '../../store/create'
import { useFetchUserInfo } from './hooks/useFetchUserInfo'

export type RedirectProps = {
  // id: string
}

const RedrectPage: React.FC<RedirectProps> = ({ }) => {


  const [server, setServer] = useState<boolean>(true)
  const [id, setId] = useState<string>('')

  // const { setId, id } = useStore((store: any) => ({
  //   setId: store.setId,
  //   id: store.id
  // })) as stateType

  console.log(id, 'au');


  useEffect(() => {
    setServer(!isServer)
    const { type } = searchParase(window.location.search) as { type: string }
    setId(type)
    console.log(id, "efid");
    localStor('id', id)
  }, [])

  useFetchUserInfo().then(res => {
    console.log(res, "hooks pro");

  })


  const router = useRouter()

  const { query: { type } } = router

  console.log(router, type);


  return <>{server ? <Loading where={'/rooms'} /> : null}</>
}


export default RedrectPage