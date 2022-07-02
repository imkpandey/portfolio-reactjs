import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
