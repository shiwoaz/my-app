import React from 'react'
import OnlinPeopleCard from './OnlinPeopleCard'

interface ILeftMainBody {

}

const LeftMainBody: React.FC<ILeftMainBody> = ({ }) => {
  return (
    <>
      <div className='w-full h-auto'>
        <OnlinPeopleCard />
      </div>
    </>
  )
}

export default LeftMainBody
