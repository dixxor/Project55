import React from 'react'
import Header from '../Commons/Heading/Header'
import Hero from './hero/Hero'
import About from './about/About'
import Grid from './grid/Grid'
import Cards from './cards/Cards'
import News from './news/News'
import Footer from '../Commons/Footer/Footer'




const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Grid />
    <Cards />
    <News />
    <Footer />
    </>
  )
}

export default Home
