import React from 'react'

export type ButtonProps = {

}

const Button: React.FC<ButtonProps> = ({
  children
}) => {

  return <button>{children}</button>
}

export default Button

export type LoginButtonProps = {
  children: React.ReactNode[]
}

export const LoginButton: React.FC<LoginButtonProps> = ({ children }) => {

  return (
    <Button>
      <div className='flex flex-nowrap w-52 min-w-1/4 justify-around p-4 border-2 rounded-md border-blue-300 border-opacity-75 hover:bg-blue-500 hover:bg-opacity-10'>
        {children[0]}
        {children[1]}
      </div>
    </Button>
  )
}