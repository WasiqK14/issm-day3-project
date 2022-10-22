import React from 'react'
import { Navbar, Hero, Middle, LowMiddle, Stats, Region, Warehouse, Footer } from '../../components'
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
      <Footer />
    </React.Fragment>
  )
}

export default Home