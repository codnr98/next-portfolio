import { FC, PropsWithChildren } from 'react'
import { Analytics } from '@vercel/analytics/react'

import Footer from './footer'
import Header from './header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-primary">
      <Header />
      <div className="m-5">{children}</div>
      <Analytics />
      <Footer />
    </div>
  )
}

export default Layout
