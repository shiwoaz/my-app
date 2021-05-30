import React from "react";
import { useRouter } from 'next/router'

import isServer from "../lib/isServer";
import { localGet } from "../lib/localStorage";

const IsLogin: React.FC = ({ children }) => {

  const router = useRouter()

  if (!isServer) {
    const logined = localGet('info') ? true : false

    if (!logined) {
      router.push({
        pathname: '/'
      })
      return null
    }
  }

  return (
    <>
      {children}
    </>
  )
}

export default IsLogin