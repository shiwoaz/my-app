import React, { ChangeEventHandler } from 'react'

export type InputProps = {
  placeholder?: string
  type: 'text' | 'password'
  onChange?: ChangeEventHandler<HTMLInputElement>
  className?: string
}

const Input: React.FC<InputProps> = ({
  placeholder = '',
  type,
  onChange,
  className = ''
}) => {

  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`bg-opacity-50 ${className}`}
      onChange={onChange}
      style={{
        outline: 'none'
      }}
    />
  )
}

export default Input