import { FC, PropsWithChildren } from 'react'
import Footer from './footer'
import Header from './header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
