import React from 'react'
import { Navbar, Hero, Middle, LowMiddle,Stats } from '../../components'
const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Middle />
      <LowMiddle />
      <Stats />
    </React.Fragment>
  )
}

export default Home