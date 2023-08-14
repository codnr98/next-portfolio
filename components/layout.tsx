import { FC, PropsWithChildren } from 'react'
import Footer from './footer'
import Header from './header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <h1>레이아웃</h1>
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
