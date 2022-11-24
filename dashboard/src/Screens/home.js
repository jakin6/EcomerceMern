import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
const home = () => {
  return (
    <>
      <Sidebar/>
      <main className='main-wrap'>
          <Header/>
      </main>
    </>
  )
}

export default home