import React from 'react'
import            './Footer.css'
import {AiFillInstagram}  from 'react-icons/ai'
import {RiWhatsappFill}  from 'react-icons/ri'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>WALEN LUCAS TAVARES DA CUNHA</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre Mim.</a></li>
        <li><a href="#experiencia">Experiência</a></li>
        <li><a href="#serviços">Serviço</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Comentario</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.instagram.com/wtaaaa_1/" target='_blank'><AiFillInstagram/></a>
      <a href="http://wa.me/+5561998481108" target='_blank'><RiWhatsappFill/></a>
      </div>

      <div className="footer__copyright">
        <small>Warlen Tavares &copy;2023</small>
      </div>
    </footer>
  )
}

export default footer
