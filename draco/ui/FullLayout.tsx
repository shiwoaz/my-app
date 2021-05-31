import React, { useEffect, useState } from 'react'

export type FullLayoutProps = {
  classname?: string
}

const FullLayout: React.FC<FullLayoutProps> = ({
  children,
  classname = ''
}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true)
  })

  return (
    <>
      {
        mounted && (
          <div className={"w-screen h-screen ".concat(classname)}>
            {children}
          </div>
        )
      }
    </>
  )
}

export default FullLayout