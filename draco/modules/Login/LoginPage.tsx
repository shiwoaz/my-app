import React from 'react'
import Header from '../../lib/header'

import { LoginButton } from '../../ui/Button'
import GithubSvg from '../../icons/GithubSvg'
import TwitterSvg from '../../icons/TwitterSvg'

const Login: React.FC = () => {

  return (
    <>
      <Header title='Login Ovo' />
      <div
        className='w-screen h-screen flex justify-center items-center min-w-1/4'
        style={{
          "backgroundImage": "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)"
        }}
      >
        <div
          className='w-3/5 h-3/5 flex items-center bg-gray-800 bg-opacity-10 shadow-xl rounded-lg'
          style={{
            'backdropFilter': 'blur(5px)'
          }}
        >
          <div
            className='bg-chat w-2/5 h-4/6 rounded-md m-14'
          ></div>
          <div className='h-full flex w-5/6 flex-col justify-center content-between'>
            <div className='h-2/6'>
              <h1 className='text-3xl font-bold text-center'>Get Started Now</h1>
              <p className='text-center mt-5 font-mono'>It's free to join!</p>
            </div>
            <div className='h-3/6 flex flex-col justify-around items-center w-full'>
              <LoginButton>
                <GithubSvg />
                <span>Log in with Github</span>
              </LoginButton>
              <LoginButton>
                <TwitterSvg />
                <span>Log in with Twitter</span>
              </LoginButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login