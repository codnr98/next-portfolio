import { FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h1>레이아웃</h1>
      <div>{children}</div>
    </>
  )
}
