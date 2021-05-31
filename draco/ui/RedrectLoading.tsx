import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import FullLayout from './FullLayout'
import isServer from '../lib/isServer'

export type RedrectLoadingProps = {
  text?: string
  where?: string
  info?: {
    [k in string]: any
  }
}

const RedrectLoading: React.FC<RedrectLoadingProps> = ({
  text = "Loading...",
  info = {},
  where,
}) => {

  if (isServer) return null

  const { replace } = useRouter()

  replace({
    pathname: where,
    query: info
  })

  return (
    <>
      <FullLayout classname='flex justify-center items-center'>
        <span className="animate-ping absolute inline-flex w-12 h-12 rounded-full bg-blue-400 opacity-75"></span>
        <span className='font-mono md:text-4xl text-xl'>{text}</span>
      </FullLayout>
    </>
  )
}

export default RedrectLoading