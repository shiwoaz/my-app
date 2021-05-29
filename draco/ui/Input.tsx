import React from 'react'

export type InputProps = {
  placeholder?: string
  type: 'text' | 'password'
}

const Input: React.FC<InputProps> = ({
  placeholder = '',
  type
}) => {

  return (
    <input
      placeholder={placeholder}
      type={type}
      className='bg-opacity-50 '
    />
  )
}

export default Input