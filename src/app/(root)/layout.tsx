import React, { ReactNode } from 'react'

export const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
        Navbar
        {children}
        Footer
    </main>
  )
}

export default RootLayout;