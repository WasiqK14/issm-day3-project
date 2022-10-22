import React from 'react'
import { Navbar, Hero, Middle, LowMiddle, Stats, Region } from '../../components'
const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Middle />
      <LowMiddle />
      <Stats />
      <Region />
    </React.Fragment>
  )
}

export default Home