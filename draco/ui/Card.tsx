import React from 'react'

interface ICard {
  /** @name Include-background-color */
  className: string
}

const Card: React.FC<ICard> = ({
  children,
  className
}) => {
  return (
    <div className={`${className} p-3 rounded-md shadow-xl`}>
      {children}
    </div>
  )
}

export default Card
