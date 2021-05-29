import Head from 'next/head'

export type HeaderProps = {
  title?: string
}

const Header: React.FC<HeaderProps> = ({
  title
}) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default Header