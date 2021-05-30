import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import isServer from '../../lib/isServer'
import Loading from '../../ui/RedrectLoading'
import { GetServerSideProps } from 'next'
import searchParase from '../../lib/searchParase'

const RedrectPage: React.FC = () => {

  const [server, setServer] = useState<boolean>(true)
  const [id, setId] = useState<string>('')

  useEffect(() => {
    setServer(!isServer)
    const { type } = searchParase(window.location.search) as { type: string }
    setId(type)
  }, [])

  const router = useRouter()

  const { query: { type } } = router

  console.log(router, type);


  return <>{server ? <Loading info={{ id }} where={'/rooms'} /> : null}</>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context, "con");
  console.log(window.location.href);


  return {
    props: {}
  }
}

export default RedrectPage