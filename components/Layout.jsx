import React from 'react'
import Head from 'next/head'

import { Navbar } from './'

function Layout({ children }) {
  return (
    <>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

      <Head>
        <title>Thomas Blog</title>
      </Head>
      
      <Navbar />
      {children}
    </>
  )
}

export default Layout