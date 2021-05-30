import React from 'react'
import Header from '../../lib/header'

import { LoginButton } from '../../ui/Button'
import GithubSvg from '../../icons/GithubSvg'
import TwitterSvg from '../../icons/TwitterSvg'

import { BaseURL } from '../../settings/Global'
import { oauthURL } from '../../utils/oauth-url'

const Login: React.FC = () => {

  return (
    <>
      <Header title='Login Ovo' />
      <div
        className='w-screen h-screen flex justify-center items-center min-w-1/4'
        style={{
          "backgroundImage": "linear-gradient(to right, rgb(35, 48, 66), rgb(35, 48, 66))"
        }}
      >
        <div
          className='md:w-3/5 w-5/6 md:h-3/5 h-5/6 flex md:flex-row flex-col items-center bg-opacity-25 shadow-xl rounded-lg'
          style={{
            'backdropFilter': 'blur(5px)',
            "backgroundImage": "linear-gradient(to right, #2d3e55, #2d3e59)"
          }}
        >
          <div
            className='bg-chat md:w-2/5 md:h-4/6 h-2/4 rounded-md md:m-14 mt-7 w-4/5'
          ></div>
          <div className='h-full flex w-5/6 flex-col md:justify-center content-between justify-around'>
            <div className='h-2/6 flex flex-col justify-center '>
              <h1 className='ext-3xl font-bold text-center text-lg text-pink-100'>Get Started Now</h1>
              <p className='text-center mt-5 font-mono text-indigo-50'>It's free to join!</p>
            </div>
            <div className='md:h-3/6 h-1/3 flex flex-col justify-around items-center w-full'>
              <LoginButton href={oauthURL('GITHUB')}>
                <GithubSvg classname={'text-indigo-50 fill-current'} />
                <span>Log in with Github</span>
              </LoginButton>
              <LoginButton href={`${BaseURL}`}>
                <TwitterSvg classname={'text-indigo-50 fill-current'} />
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