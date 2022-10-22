import React from 'react'
import { Navbar, Hero, Middle, LowMiddle, Stats, Region, Warehouse } from '../../components'
const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Middle />
      <LowMiddle />
      <Stats />
      <Region />
      <Warehouse />
    </React.Fragment>
  )
}

export default Home