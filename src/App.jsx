import React        from 'react'
import Header       from './components/Header/Header'
import Nav          from './components/Nav/Nav'
import Abaut        from './components/About/About'
import Experiencia  from './components/Experiencia/Experiencia'
import Serviços     from './components/Serviços/Serviço'
import Portfolio    from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contato      from './components/Contato/Contato'
import Footer       from './components/Footer/Footer'

const App = () => {
  return (
    <>
       <Header/>
       <Nav />
       <Abaut />
       <Experiencia/>
       <Serviços/>
       <Portfolio/>
       <Testimonials/>
       <Contato/>
       <Footer/>

    </>
  )
}

export default App

