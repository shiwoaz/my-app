import * as React from 'react';

import FriendSvg from '../icons/FriendSvg'

export interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <div className='w-full h-1/6 flex items-center justify-center'>
      <FriendSvg classname=" fill-current text-gray-50 stroke-4 stroke-current" width={45} height={45} />
      <span className='text-gray-50 font-mono text-4xl ml-5 text-center font-bold'>Chat Room</span>
    </div>
  );
}

export default Header
