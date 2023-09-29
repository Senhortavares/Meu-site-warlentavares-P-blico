import   React        from 'react'
import                     './Serviço.css'
import {FaUserCheck}  from 'react-icons/fa'
const serviço = () => {
  return (
    <section id='serviços'>
      <h5>Meu Trabalho!</h5>
      <h2>Venha conhecer.</h2>

      <div className='container serviço__container'>
        <article className='serviço'>
          <div className='serviço__head'>
            <h3>HTML, CSS, JS, REACT</h3>
          </div>

          <ul className='serviço__list'>
               <li><FaUserCheck className='serviço__list-icon'/> <p>Estou estudando programação, mas ja tenho experiencia com html, css, js, react.</p></li>

          </ul>
        </article>

     </div>  {/* <div className='container serviço__container'> */}

    </section>
  )
}

export default serviço
