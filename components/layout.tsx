import { FC, PropsWithChildren } from 'react'
import Footer from './Footer'
import Header from './Header'

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
