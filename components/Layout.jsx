import React from 'react'
import { Navbar } from './'

function Layout({children}) {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default Layout