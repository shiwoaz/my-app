import React from 'react'

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  style?: React.CSSProperties
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  style,
  className
}) => {

  return <button className={className} style={style} onClick={onClick}>{children}</button>
}

export default Button

export type LoginButtonProps = {
  children: React.ReactNode[]
  href: string
}

export const LoginButton: React.FC<LoginButtonProps> = ({ children, href }) => {

  const onClick = () => {
    window.location.href = `${href}`
  }

  return (
    <Button onClick={onClick} className='p-3 md:p-0 md:h-1/5'>
      <div className='flex flex-nowrap w-52 min-w-1/4 justify-around p-4 border-2 rounded-md text-indigo-50 border-blue-300 border-opacity-75 hover:bg-blue-500 hover:bg-opacity-10'>
        {children[0]}
        {children[1]}
      </div>
    </Button>
  )
}