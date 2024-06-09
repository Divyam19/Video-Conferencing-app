import React, { ReactNode } from 'react'

export const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default RootLayout;