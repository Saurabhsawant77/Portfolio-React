import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Github from './components/Github'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Banner />
    <About />
    <Services />
    <Skills />
    <Github />
    <Footer />
    </>
  )
}

export default App
