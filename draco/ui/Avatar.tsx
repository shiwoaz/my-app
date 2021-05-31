import React from 'react'

interface IAvatar {
  url: string,
  height?: string
  width?: string
  onClick?: () => void
}

const Avatar: React.FC<IAvatar> = ({
  url,
  height,
  width,
  onClick
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        height: height || "50rpx",
        width: width || "50rpx"
      }}

      className='bg-center bg-no-repeat bg-cover rounded-full'

      onClick={onClick}
    >
    </div >
  )
}

export default Avatar
