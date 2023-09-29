import React             from 'react'
import                        './About.css'
import ME                from '../../assets/PicsArt_09.jpg'
import {FaAward}         from 'react-icons/fa'
import {FaUserAstronaut} from 'react-icons/fa'
import {VscProject}      from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Conheça</h5>
      <h2>sobre mim.</h2>

      <div className="conteiner about__container">
        <div className="about__me">
           <div className="about__me-image">
            <img src={ME} alt="warlen.png-[ERRO! IMG-NÃO-SUPORTADA!]"/>
           </div> {/*<div className="about__me-image">*/}
        </div>  {/*<div className="about__me"> */}

        <div className="about__content">
           <div className="about__cards01">

              <article className="about__cards">
                <FaAward className='about__icon'/>
                    <h5>Experiência</h5>
                    <small>1 ano e 2 meses especializando.</small>
              </article>

              <article className="about__cards">
                <FaUserAstronaut className='about__icon'/>
                    <h5>Habilidade.</h5>
                    <small>HTML, CSS, JS, REACT.</small>
              </article>

              <a href="https://github.com/Senhortavares" target='back'><article className="about__cards">
                <VscProject className='about__icon'/>
                    <h5>Projetos</h5>
                    <small>Estou desenvolvendo.</small>
              </article></a>
           </div>

           <p>
              Tecnologia sempre foi minha paixão. 
            Atualmente estou me especializando <br/> na área, mas já possuo
            algumas habilidades em HTML, CSS, JS, REACT. <br/> 
            A cada dia, mais e mais, estou  em busca de novos conhecimentos
            na  área de  tecnologia<br/> e também em busca de novos projetos. <br/>
            Assim, ficaria honrado  em mostrar para o (a) senhor (a), 
            meus conhecimentos e habilidades,<br/> que podem ser aplicados a sua empresa.
           </p>

           <a href="#contato" className='btn btn-primary'>Conecte comigo.</a>
        </div>
      </div>{/*<div className="conteiner about__container">*/}
    </section>
  )
}

export default about
