import type { AppProps } from 'next/app'
import Router from 'next/router'

import Nprogress from 'nprogress'
import 'tailwindcss/tailwind.css'

import initStore from '../store/create'
import StoreProvider from '../store/context'
import i18n_init from '../lib/i18n'
import isServer from '../lib/isServer'

Router.events.on('routeChangeStart', () => Nprogress.start())
Router.events.on('routeChangeComplete', () => Nprogress.done())
Router.events.on('routeChangeError', () => Nprogress.done())

function MyApp({ Component, pageProps }: AppProps) {

  const store = initStore()

  if (!isServer) {
    i18n_init()
  }

  return (
    <>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  )
}
export default MyApp
