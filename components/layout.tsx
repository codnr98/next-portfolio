import { FC, PropsWithChildren } from 'react'
import Footer from './footer'
import Header from './header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
