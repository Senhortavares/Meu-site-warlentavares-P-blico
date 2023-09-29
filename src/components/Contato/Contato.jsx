import React      from 'react'
import                 './Contato.css'
import {MdEmail}  from 'react-icons/md'
import {AiFillInstagram}  from 'react-icons/ai'
import {RiWhatsappFill}  from 'react-icons/ri'
import {BsLinkedin}  from 'react-icons/bs'


const contato = () => {
  return (
    <section id='contato'>
      <h5>Entre em Contacto </h5>
      <h2>Meus Contatos</h2>

      <div className="container contato__container">
           <article className="contato__options">
            <MdEmail className='contato__option-icon'/>
            <h4>E-mail.</h4>
            <h5>warlenlucastavares@gmail.com</h5>
            <a href="mailto:warlenlucastavares@gmail.com" target='_blank'>Enviar uma mensagem?</a>
           </article>


           <article className="contato__options">
            <AiFillInstagram className='contato__option-icon'/>
            <h4>Instagram.</h4>
            <h5>@wtaaaa_1</h5>
            <a href="https://www.instagram.com/wtaaaa_1/" target='_blank'>Visitar?</a>
           </article>


           <article className="contato__options">
            <RiWhatsappFill className='contato__option-icon'/>
            <h4>WhatsApp.</h4>
            <h5>warlen Tavares</h5>
            <a href="http://wa.me/+5561998481108" target='_blank'>Enviar uma mensagem?</a>
           </article>


           <article className="contato__options">
            <BsLinkedin className='contato__option-icon'/>
            <h4>LinkedIn.</h4>
            <h5>Warlen Lucas Tavares Da Cunha</h5>
            <a href="https://www.linkedin.com/in/warlen-tavares-a1b883257/" target='_blank'>Visitar?</a>
           </article>


           {/* Opção de fim de contato */}
           <form action="https://api.sheetmonkey.io/form/iziVhEVnyfdt4iw9uBMHgd" method="post">
                <input type="text" name='name' placeholder='Seu nome' required/>
                <input type="email" name='email' placeholder='email' required/>
                <textarea name="Mensagem"   rows="10" placeholder='Sua mensagem' required></textarea>
                <button type='submit' className='btn btn-primary'>Enviar</button>
           </form>
      </div>
    </section>
  )
}

export default contato
