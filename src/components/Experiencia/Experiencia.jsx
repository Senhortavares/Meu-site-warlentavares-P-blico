import React          from 'react'
import                     './Experiencia.css'
import {HiBadgeCheck} from 'react-icons/hi'
import {VscError}     from 'react-icons/vsc'
import {GiStopwatch}  from  'react-icons/gi'

const experiencia = () => {
  return (
    <section className='experiencia01' id='experiencia'>
      <h5>Habilidades</h5>
      <h2>Minha experiência</h2>

      <div className="container experiencia__container">

        {/* frontend  */}
        <div className="experiencia__frontend">
          <h3>FrontEnd Develop</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon'/>
               <div>
               <h4>HTML-5</h4>
                <small className='text-light'>Intermediário.</small>
               </div>
            </article>

            <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon'/>
                <div>
                <h4>CSS-3</h4>
                <small className='text-light'>Intermediário.</small>
                </div>
            </article>

            <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediário.</small>
                </div>
            </article>

            <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon'/>
                <div>
                <h4>REACT</h4>
                <small className='text-light'>Intermediário.</small>
                </div>
            </article>

            <article className='experience__details'>
                <GiStopwatch className='experience__details-iconAT'/>
                <div>
                <h4>TYPESCRIPT</h4>
                <small className='text-light'>Estudando...</small>
                </div>
            </article>
          </div>
        </div>
       
          {/* BackEnd  */}
        <div className="experiencia__backend">
          <h3>BackEnd Develop</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
                <GiStopwatch className='experience__details-iconAT'/>
                <div><h4>Node.JS</h4>
                <small className='text-light'>Estudando...</small>
                </div>
            </article>

            <article className='experience__details'>
                <VscError className='experience__details-iconN'/>
               <div>
               <h4>PHP</h4>
                <small className='text-light'>Pendente...</small>
               </div>
            </article>

            <article className='experience__details'>
                <GiStopwatch className='experience__details-iconAT'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Estudando...</small>
                </div>
            </article>

            <article className='experience__details'>
                <GiStopwatch className='experience__details-iconAT'/>
              <div>
              <h4>PYTHON</h4>
                <small className='text-light'>Estudando...</small>
              </div>
            </article>

            <article className='experience__details'>
                <VscError className='experience__details-iconN'/>
                <div>
                <h4>Java</h4>
                <small className='text-light'>Pendente...</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experiencia
