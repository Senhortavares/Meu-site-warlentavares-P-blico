import React from 'react'
import            './Header.css'
import CTA   from './CTA'
import ME    from  '../../assets/warlen.png.jpeg'
import HeaderSocials from './HeaderSocials'
const header = () => {
  return (
    <header>
      <div className="conteiner header__conteiner">
        <h5>Olá.<br/> Eu sou</h5>
        <h1>Warlen Tavares!</h1>
        <h5 className="text-light" >Desenvolvedor FrontEnd.</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img id='wt' src={ME} alt="Warlen.png-[ERRO!"  />
        </div>

        <a href="#contato" className='scrll__down'>Role para baixo. </a>
      </div>
    </header>
  )
}

export default header
