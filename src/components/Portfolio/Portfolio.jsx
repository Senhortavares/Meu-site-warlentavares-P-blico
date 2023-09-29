import React      from 'react'
import                 './Portfolio.css'
import Portfolio  from '../../assets/GitHub-2.png'      

 
const portfolio = () => {
  const data = [

    {
    id: 1,
    image: Portfolio,
    title: 'Meu Projeto',
    github:'https://github.com/Senhortavares',
    projeto: 'https://github.com/Senhortavares'
    },
    {
    id: 2,
    image: Portfolio,
    title: 'Meu Projeto',
    github:'https://github.com/Senhortavares',
    projeto: 'https://github.com/Senhortavares'
    },
    {
    id: 3,
    image: Portfolio,
    title: 'Meu Projeto',
    github:'https://github.com/Senhortavares',
    projeto: 'https://github.com/Senhortavares'
    },
    {
      id: 4,
      image: Portfolio,
      title: 'Meu Projeto',
      github:'https://github.com/Senhortavares',
      projeto: 'https://github.com/Senhortavares'
      },
      {
        id: 5,
        image: Portfolio,
        title: 'Meu Projeto',
        github:'https://github.com/Senhortavares',
        projeto: 'https://github.com/Senhortavares'
        },
        {
          id: 6,
          image: Portfolio,
          title: 'Meu Projeto',
          github:'https://github.com/Senhortavares',
          projeto: 'https://github.com/Senhortavares'
          },
    ]
  return (
    <section id='portfolio '>
            <h5>Meu</h5>
            <h2>Portfolio.</h2>
            <div className="container portfolio__container">
              {
                data.map(({id, image, title, github, projeto}) =>{
                  return (
                    <article key={id} className='portfolio__item'>

                    <div className='portfolio__item-image'> 
                       <img src={Portfolio } alt={title} /> {/* TENHO QUE COLOCAR AS IMGS AQUI ANTES DE FAZER AS HOSPEDAGENS */}
                    </div>
                         {/* projetos que ainda tenho que colocar */}
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
    
                       <a href={github} target='_blank' className='btn'>Github</a>
                       <a href={projeto} target='_blank' className='btn btn-primary'>Projeto</a>
                    
                    </div>
                  </article>
                  )
                })
              }
              
            </div>
    </section>
  )
}

export default portfolio
