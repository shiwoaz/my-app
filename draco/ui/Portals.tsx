import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
  visible: boolean
  ref?: React.ReactNode
  anchorEl?: HTMLDivElement
  clasname?: string
  onClose(): void
}

const Portal: React.FC<IPortalProps> = ({
  visible,
  children,
  anchorEl,
  onClose
}) => {

  if (!visible) return null

  const div = useMemo(() => document.createElement("div"), [])

  const ref = useRef<HTMLDivElement>(null)
  const container = useRef<HTMLDivElement>(null)

  const clickListener = (e: MouseEvent) => e.target === container.current && onClose()

  useEffect(() => {

    const target = anchorEl ?? document.body

    target.appendChild(div)

    container.current?.addEventListener('click', clickListener)

    return () => {
      target.removeChild(div)
      clearTimeout(a)
      container.current?.removeEventListener('click', clickListener)
    }
  }, [])


  const a = setTimeout(() => {
    ref.current?.classList.add('opacity-100')
    container.current?.classList.add('backdrop-blur-sm')
  }, 190);

  const Sub = (

    <div ref={container} className='fixed -top-0 -left-0 -right-0 -bottom-0 backdrop-filter flex justify-center items-center'>
      <div
        id="portal"
        ref={ref}
        className={`bg-red-400 w-3/5 overflow-x-hidden opacity-0 p-3 duration-300 ease-linear transition-opacity `}
      >
        {children}
      </div>
    </div>

  )


  return createPortal(Sub, div)
}

export default Portal